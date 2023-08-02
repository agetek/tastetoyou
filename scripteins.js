function start() {
    open();
    search = false;
    callStartFunctions();
    window.onscroll = function () { stickyHeaders() };
    window.addEventListener('resize',
        function () {
            mobileFunction();
        }
    );
}

function callStartFunctions() {
    renderAnchorRow();
    renderCategories();
    renderCart();
    saveAnchors();
    mobileCart();
    mobileFunction();
}

function mobileFunction() {
    if (window.innerWidth >= 1024) {
        mobileFunctionIf();
    }
    else {
        mobileFunctionElse();
    }
}

function mobileFunctionIf() {
    mobile = false;
    screenwidth = window.screenX;
    renderAnchorRow();
    renderCart();
    document.getElementById("mobile_cart").style.display = "none";
    document.getElementById("shopping_cart").style.display = "flex";
}

function mobileFunctionElse() {
    mobile = true;
    screenwidth = window.screenX;
    if (!inmobilecart) { document.getElementById("shopping_cart").style.display = "none"; }
    mobileCart();
}

function renderCategories() {
    let render = '';
    for (let i = 0; i < menu[0]['categories'].length; i++) {
        let img = renderCategoryImg(i);
        render += `<div class="category" id="${menu[0]['categories'][i]['anchor']}">`;
        render += img;
        render += `<div class="category_heading">${menu[0]['categories'][i]['name']}</div>`;
        render += `</div>`;
        render += renderDishes(i);
    }
    document.getElementById('menu').innerHTML = render;
}

function renderCategoryImg(i) {
    let render = '';
    if (menu[0]['categories'][i]['img'] == '') {
        return render;
    }
    else {
        render = `<div class="category_img"><img class="category_img_img" src="img/ak/${menu[0]['categories'][i]['img']}" alt=""></div>`;
        return render;
    }
}

function renderDishes(i) {
    let render = '';
    for (let ii = 0; ii < menu[0]['categories'][i]['members'].length; ii++) {
        let index = menu[0]['categories'][i]['members'][ii];
        let price = formatPrice(menu[0]['dishes'][index]['price']);
        let cart_amount = cartAmount(index);
        render += renderDishesHtml(index, price, cart_amount);
    }
    return render;
}

function renderDishesHtml(index, price, cart_amount) {
    let render = `<div class="dish" onclick="addDish(${menu[0]['dishes'][index]['id']})">
        <div class="dish_header">
            <div class="dish_name">${menu[0]['dishes'][index]['name']}<div class="dish_info"></div></div>
            ${cart_amount}
        </div>
        <div class="dish_description">${menu[0]['dishes'][index]['description']}</div>
        <div class="dish_choosefrom">${menu[0]['dishes'][index]['choosefrom']}</div>
        <div class="dish_price">${price}</div>
        <div class="dish_note">${menu[0]['dishes'][index]['note']}</div>
        </div>`;
    return render;
}


function addDish(id) {
    let added = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i]['id'] == id) {
            cart[i]['amount'] += 1;
            added = true;
        }
    }
    if (!added) {
        addNewDish(id);
    }
    save();
    start();
}

function addNewDish(id) {
    let dish = {
        'id': id,
        'amount': 1,
        'name': menu[0]['dishes'][id]['name'],
        'price': menu[0]['dishes'][id]['price'],
        'comment': '',
    };
    cart.push(dish);
}

function removeDish(id) {
    let removed = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i]['id'] == id && cart[i]['amount'] > 1) {
            cart[i]['amount'] -= 1;
            removed = true;
        }
    }
    if (!removed) {
        removeLastDish(id);
    }
    save();
    start();
}

function removeLastDish(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i]['id'] == id) {
            cart.splice(i, 1);
        }
    }
}

function renderCart() {
    search = false;
    let render = '';
    document.getElementById('cart_sum').innerHTML = '';
    zwischensumme = 0;
    if (cart.length == 0) {
        render += renderCartIf();
    }
    else {
        render += renderCartElse(render);
    }
    document.getElementById('cart_main').innerHTML = render;
    if (edit > -1) { document.getElementById('comment_box_' + edit).classList.remove('hide'); }
}

function renderCartIf() {
    let render = `<div class="cart_fill"><img class="cart_img" src="img/icons/shopping_bag_black_24dp.svg">
    <div class="cart_sub_heading">Fülle deinen Warenkorb</div>
    <div class="cart_sub_sub_heading">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</div></div>`;
    return render;
}

function renderCartElse(render) {
    let render_output = '';
    for (let i = 0; i < cart.length; i++) {
        render_output += renderCartElseFor(i, render);
    }
    render_output += mindestBestellWert();
    gesamt = zwischensumme + servicegebuehr;
    document.getElementById('cart_sum').innerHTML = renderTotal();
    toggle_id_old = -1;
    return render_output;
}

function renderCartElseFor(i, render) {
    let render_output = render;
    let price = cart[i]['amount'] * cart[i]['price'];
    zwischensumme += price;
    price = formatPrice(price);
    let lettersleft = calcLetters(i);
    if (i > 0) {
        render_output += `<div class="cart_spacer"></div>`;
    }
    render_output += `<div class="cart_dish"><div class="cart_group"><div class="cart_amount">${cart[i]['amount']}</div><div class="cart_name">${cart[i]['name']}</div></div><div class="cart_price">${price}</div></div>`;
    render_output += renderComment(i, lettersleft);
    return render_output;
}

function renderTotal() {
    let zwischensumme_render = formatPrice(zwischensumme);
    let lieferkosten_render = 'Kostenlos';
    let servicegebuehr_render = formatPrice(servicegebuehr);
    let gesamt_render = formatPrice(gesamt);
    render = `<div class="total_above"><div class="total_above_left">Zwischensumme</div><div class="total_above_right">${zwischensumme_render}</div></div>`;
    render += `<div class="total_above"><div class="total_above_left">Lieferkosten</div><div class="total_above_right">${lieferkosten_render}</div></div>`;
    render += `<div class="total_above"><div class="total_above_left">Servicegebühr<div class="info_orange"></div></div><div class="total_above_right">${servicegebuehr_render}</div></div>`;
    render += `<div class="total"><div class="total_left">Gesamt</div><div class="total_right">${gesamt_render}</div></div>`;
    render += renderTotalButton(gesamt_render);
    return render;
}

function renderTotalButton(gesamt_render) {
    if (mindestbestellwert - zwischensumme > 0) {
        render = `<div class="total_button_gray">Bezahlen (${gesamt_render})</div>`;
    }
    else {
        render = `<div class="total_button_orange" onclick="renderPay()">Bezahlen (${gesamt_render})</div>`;
    }
    return render;
}

function mindestBestellWert() {
    let render = '';
    let mindestbestellwert_render = formatPrice(mindestbestellwert);
    let benoetigter_betrag = mindestbestellwert - zwischensumme;
    let benoetigter_betrag_render = formatPrice(benoetigter_betrag);
    if (benoetigter_betrag > 0) {
        render += `<div class="mindest"><div class="mindest_yellow"><div class="mindest_left">Benötigter Betrag, um den Mindestbestellwert zu erreichen</div><div class="mindest_right">${benoetigter_betrag_render}</div></div>`;
        render += `<div class="mindest_below">Leider kannst du noch nicht bestellen. Anatolische Küche liefert erst ab einem Mindestbestellwert von ${mindestbestellwert_render} (exkl. Lieferkosten).</div></div>`;
    }
    return render;
}

function cartAmount(id) {
    let render = '';
    let number = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i]['id'] == id) {
            render = `<div class="dish_plus_number">${cart[i]['amount']}</div>`;
            number = true;
        }
    }
    if (!number) {
        render = `<div class="dish_plus"></div>`;
    }
    return render;
}

function formatPrice(price) {
    let render = price.toFixed(2);
    render = render.replace(".", ",") + ' €';
    return render;
}

// Comment-Funktionen

function editComment(i) {
    edit = i;
    start();
}

function renderComment(i, lettersleft) {
    let render = '';
    if (cart[i]['comment'] == '') {
        render += renderCommentIf(i, lettersleft, render);
    }
    else if (edit == i) {
        render += renderCommentElseIf(i, lettersleft, render);
    }
    else {
        render += renderCommentElse(i, lettersleft, render);
    }
    return render;
}

function renderCommentIf(i, lettersleft, render) {
    render += `<div class="cart_comment"><div class="cart_comment_add" onclick="toggleComment(${i})">Anmerkung hinzufügen</div><div class="cart_group"><div class="cart_minus" onclick="removeDish(${cart[i]['id']})"></div><div class="cart_plus" onclick="addDish(${cart[i]['id']})"></div></div></div>`;
    render += `<div id="comment_box_${i}" class="comment_box hide">
            <div class="comment_header"><div class="lettersleft" id="lettersleft_${i}">${lettersleft}</div><div class="lettersleft">/160</div></div>
            <textarea class="comment_area" id="comment_area_${i}" onkeyup="lettersLeft(${i})" maxlength="160"></textarea>
            <div class="comment_command"><div class="comment_add" onclick="cancelComment(${i})">Abbrechen</div><div class="comment_add" onclick="saveComment(${i})">Hinzufügen</div></div>
        </div>`;
    return render;
}

function renderCommentElseIf(i, lettersleft, render) {
    render += `<div class="cart_comment"><div class="cart_comment_add"></div><div class="cart_group"><div class="cart_minus" onclick="removeDish(${cart[i]['id']})"></div><div class="cart_plus" onclick="addDish(${cart[i]['id']})"></div></div></div>`;
    render += `<div id="comment_box_${i}" class="comment_box hide">
            <div class="comment_header"><div class="lettersleft" id="lettersleft_${i}">${lettersleft}</div><div class="lettersleft">/160</div></div>
            <textarea class="comment_area" id="comment_area_${i}" onkeyup="lettersLeft(${i})" maxlength="160">${cart[i]['comment']}</textarea>
            <div class="comment_command"><div class="comment_add" onclick="deleteComment(${i})">Löschen</div><div class="comment_add" onclick="saveComment(${i})">Speichern</div></div>
        </div>`;
    return render;
}

function renderCommentElse(i, lettersleft, render) {
    render += `<div class="cart_comment"><div class="cart_comment_add"></div><div class="cart_group"><div class="cart_minus" onclick="removeDish(${cart[i]['id']})"></div><div class="cart_plus" onclick="addDish(${cart[i]['id']})"></div></div></div>`;
    render += `<div class="cart_comment_show"><div class="comment_show">${cart[i]['comment']}</div>
    <div class="cart_comment_add" onclick="editComment(${i})">Anmerkung bearbeiten</div></div>`;
    return render;
}

function toggleComment(id) {
    if (cart.length > 0 && toggle_id_old == id) {
        document.getElementById('comment_box_' + id).classList.add('hide');
        toggle_id_old = -1;
    }
    else if (cart.length > 0 && toggle_id_old == -1 && id > -1) {
        document.getElementById('comment_box_' + id).classList.remove('hide');
        toggle_id_old = id;
    }
    else if (cart.length > 0 && toggle_id_old > -1 && id > -1) {
        document.getElementById('comment_box_' + toggle_id_old).classList.add('hide');
        document.getElementById('comment_box_' + id).classList.remove('hide');
        toggle_id_old = id;
    }
}

function calcLetters(i) {
    let content = document.getElementById('comment_area_' + i);
    let letters = 0;
    if (content == null) { letters = 0; }
    else {
        letters = content.value;
        letters = letters.length;
    }
    let lettersleft = 160 - letters;
    return lettersleft;
}

function lettersLeft(i) {
    let lettersleft = calcLetters(i);
    document.getElementById('lettersleft_' + i).innerHTML = lettersleft;
}

function cancelComment(i) {
    document.getElementById('comment_area_' + i).value = '';
    toggleComment(i);
}

function deleteComment(i) {
    cart[i]['comment'] = '';
    edit = -1;
    save();
    start();
}

function saveComment(i) {
    let comment = document.getElementById('comment_area_' + i).value;
    if (comment.length > 0) {
        cart[i]['comment'] = comment;
        edit = -1;
        save();
        start();
    }
    else {
        cancelComment(i);
    }
}

// AnchorRow-Funktionen

function renderAnchorRow() {
    let render = renderAnchorRowStart();
    for (let i = 0; i < menu[0]['categories'].length; i++) {
        render += `<a href="#${menu[0]['categories'][i]['anchor']}" class="jump" id="jump_${i}">${menu[0]['categories'][i]['name']}</a>`;
    }
    render += `</div></div>`;
    if (mobile == true) {
        render += `<div class="anchor_right hide" id="anchor_right" onclick="anchorToRight()"></div>`;
    } else {
        render += `<div class="anchor_right" id="anchor_right" onclick="anchorToRight()"></div>`;
    }
    document.getElementById('anchor_row').innerHTML = render;
    anchorrowlength = document.getElementById('anchor_row_sub_sub').clientWidth - window.innerWidth + 600;
}

function renderAnchorRowStart() {
    render = `<div class="search" onclick="activateSearch()"></div>`;
    render += `<div class="anchor_left hide" id="anchor_left" onclick="anchorToLeft()"></div>`;
    render += `<div class="anchor_row_sub" id="anchor_row_sub">
        <div class="anchor_row_sub_sub" id="anchor_row_sub_sub">`;
    return render;
}