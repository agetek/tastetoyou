// Speicherfunktionen

function save() {
    localStorage.setItem('menu', JSON.stringify(menu));
    localStorage.setItem('cart', JSON.stringify(cart));
}


function open() {
    if (localStorage.getItem('menu') != undefined) {
        menu = JSON.parse(localStorage.getItem('menu'));
    }
    if (localStorage.getItem('cart') != undefined) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

// Stickyfunktionen

function anchorToLeft() {
    moover += 100;
    anchorToLeftFirstIf();
    anchorToLeftSecondIf();
}

function anchorToLeftFirstIf() {
    if (moover >= 0) {
        document.getElementById('anchor_left').classList.add('hide');
    }
    else {
        document.getElementById('anchor_left').classList.remove('hide');
    }
}

function anchorToLeftSecondIf() {
    if (moover < -2000) {
        document.getElementById('anchor_right').classList.add('hide');
    }
    else {
        document.getElementById('anchor_right').classList.remove('hide');
    }
    document.getElementById('anchor_row_sub_sub').style.transform = 'translateX(' + moover + 'px)';
}

function anchorToRight() {
    moover -= 100;
    anchorToRightFirstIf();
    anchorToRightSecondIf();
    document.getElementById('anchor_row_sub_sub').style.transform = 'translateX(' + moover + 'px)';
}

function anchorToRightFirstIf() {
    if (moover >= 0) {
        document.getElementById('anchor_left').classList.add('hide');
    }
    else {
        document.getElementById('anchor_left').classList.remove('hide');
    }
}

function anchorToRightSecondIf() {
    if (moover < -1 * anchorrowlength) {
        document.getElementById('anchor_right').classList.add('hide');
    }
    else {
        document.getElementById('anchor_right').classList.remove('hide');
    }
}

function stickyHeaders() {
    stickyCart();
    stickyAnchor();
    enlargeCart();
    activateAnchor();
    updateMoover();
}

function stickyCart() {
    let cart = document.getElementById('shopping_cart');
    let sticky = document.getElementById('middle').offsetTop;
    if (window.scrollY > sticky) {
        cart.classList.add('sticky');
    } else {
        cart.classList.remove('sticky');
    }
}

function enlargeCart() {
    let cart = document.getElementById('cart_main');
    let sticky = document.getElementById('middle').offsetTop;
    if (window.scrollY > sticky) {
        cart.classList.add('cart_height_plus');
    } else {
        cart.classList.remove('cart_height_plus');
    }
}

function stickyAnchor() {
    let anchor_row = document.getElementById('anchor_row');
    let sticky = document.getElementById('menu').offsetTop;
    if (window.scrollY > sticky) {
        anchor_row.classList.add('sticky');
    } else {
        anchor_row.classList.remove('sticky');
    }
}

function activateAnchor() {
    if (!search) {
        let end = menu[0]['categories'].length - 1;
        for (let i = 0; i < end; i++) {
            activateAnchorIf1();
            activateAnchorIf2();
            activateAnchorIf3(i);
            activateAnchorIf4(i);
            activateAnchorIf5(end);
            activateAnchorIf6(end);
        }
    }
}

function activateAnchorIf1() {
    if (window.scrollY <= menu[0]['categories'][0]['offset']) {
        document.getElementById('jump_' + 0).classList.add('active');
    }
}

function activateAnchorIf2() {
    if (window.scrollY > menu[0]['categories'][1]['offset']) {
        document.getElementById('jump_' + 0).classList.remove('active');
    }
}

function activateAnchorIf3(i) {
    if (window.scrollY > menu[0]['categories'][i]['offset'] && window.scrollY < menu[0]['categories'][i + 1]['offset']) {
        document.getElementById('jump_' + i).classList.add('active');
    }
}

function activateAnchorIf4(i) {
    if (window.scrollY < menu[0]['categories'][i]['offset'] || window.scrollY > menu[0]['categories'][i + 1]['offset']) {
        document.getElementById('jump_' + i).classList.remove('active');
    }
}

function activateAnchorIf5(end) {
    if (window.scrollY > menu[0]['categories'][end]['offset']) {
        document.getElementById('jump_' + end).classList.add('active');
    }
}

function activateAnchorIf6(end) {
    if (window.scrollY < menu[0]['categories'][end]['offset']) {
        document.getElementById('jump_' + end).classList.remove('active');
    }
}

function saveAnchors() {
    for (let i = 0; i < menu[0]['categories'].length; i++) {
        menu[0]['categories'][i]['offset'] = document.getElementById(menu[0]['categories'][i]['anchor']).offsetTop;
    }
    save();
}

function updateMoover() {
    if (!search) {
        let anchorrowsubsub_width = document.getElementById('anchor_row_sub_sub').clientWidth;
        let anchorrowsub_width = document.getElementById('anchor_row_sub').clientWidth;
        let totalheight = document.getElementById('footer_element').offsetTop;
        let scaler = anchorrowsubsub_width / (totalheight);
        let scrollanchorrow = Math.round(window.scrollY * scaler) - anchorrowsub_width + 160;
        updateMooverIfElse(scrollanchorrow);
    }
}

function updateMooverIfElse(scrollanchorrow) {
    if (scrollanchorrow > 62) {
        moover = -1 * (scrollanchorrow - 62);
        document.getElementById('anchor_row_sub_sub').style.transform = 'translateX(' + moover + 'px)';
    }
    else {
        moover = 0;
        document.getElementById('anchor_row_sub_sub').style.transform = 'translateX(' + moover + 'px)';
    }
}

// Mobile Funktionen

function calcAmount() {
    let amount = 0;
    for (let i = 0; i < cart.length; i++) {
        amount += cart[i].amount;
    }
    return amount;
}

function mobileCart() {
    if (mobile && cart.length > 0 && !inmobilecart) {
        document.getElementById("mobile_cart").style.display = "flex";
        document.getElementById('mobile_cart').innerHTML = renderMobileCart();
    }
    else {
        document.getElementById("mobile_cart").style.display = "none";
    }
}

function renderMobileCart() {
    let render = '';
    let amount = calcAmount();
    render += `<div class="mobile_cart_button hide" id="mobile_cart_button" onclick="showMobileCart()"><div class="mobile_basket_number" id="mobile_basket_number">${amount}</div><div class="mobile_basket" id="mobile_basket"></div>Warenkorb</div>`;
    return render;
}

function showMobileCart() {
    document.getElementById('header_element').style.display = "none";
    document.getElementById('restaurant').style.display = "none";
    document.getElementById('mobile_cart').style.display = "none";
    document.getElementById("shopping_cart").style.display = "flex";
    document.getElementById("shopping_cart").style.top = 0;
    document.getElementById("shopping_cart").style.width = "100%";
    document.getElementById("shopping_cart").style.boxShadow = "0 15px 15px rgba(0, 0, 0, 0.0)";
    document.getElementById("footer_element").style.display = "none";
    document.getElementById("close_mobile_cart").style.display = "flex";
    inmobilecart = true;
}

function closeMobileCart() {
    document.getElementById('header_element').style.display = "flex";
    document.getElementById('restaurant').style.display = "flex";
    document.getElementById('mobile_cart').style.display = "none";
    document.getElementById("shopping_cart").style.display = "flex";
    document.getElementById("shopping_cart").style.width = "344px";
    document.getElementById("shopping_cart").style.boxShadow = "0 15px 15px rgba(0, 0, 0, 0.1)";
    document.getElementById("footer_element").style.display = "flex";
    document.getElementById("close_mobile_cart").style.display = "none";
    inmobilecart = false;
    start();
}

// Payfunktion

function renderPay() {
    document.getElementById("pay").style.display = "flex";
    let render = `<div class="close_pay" onclick="closePay()"></div><div class="pay_inner"><div class="pay_above">Vielen Dank für Ihre Bestellung!</div><div class="pay_below">Diese Website dient nur zu Demonstrationszwecken. Bestellungen werden nicht ausgeführt.</div></div>`;
    document.getElementById('pay').innerHTML = render;
    document.getElementById("header_element").style.display = "none";
    document.getElementById("footer_element").style.display = "none";
    document.getElementById("middle").style.display = "none";
    document.getElementById("close_mobile_cart").style.display = "none";
}

function closePay() {
    document.getElementById("pay").style.display = "none";
    document.getElementById("header_element").style.display = "flex";
    document.getElementById("footer_element").style.display = "flex";
    document.getElementById("middle").style.display = "block";
    cart = [];
    save();
    closeMobileCart();
}

// Suchfunktionen

function activateSearch() {
    let render = `<div class="search" onclick="activateSearch()"></div>
    <input type="search"  id="searchfield" class="searchfield" placeholder="Suche nach Gerichten, usw..." onkeyup="executeSearch()">
    <div class="close_search" id="close_search" onclick="deactivateSearch()"></div>`;
    document.getElementById('anchor_row').innerHTML = render;
    search = true;
}

function deactivateSearch() {
    renderAnchorRow();
    start();
    search = false;
}

function executeSearch() {
    let searchword = document.getElementById('searchfield').value;
    searchword = searchword.toLowerCase();
    let searcharray = getSearchIndex(searchword);
    renderSearch(searcharray);
}

function getSearchIndex(searchword) {
    let searcharray = [];
    for (let i = 0; i < menu[0]['dishes'].length; i++) {
        let name = menu[0]['dishes'][i]['name'];
        name = name.toLowerCase();
        let description = menu[0]['dishes'][i]['description'];
        description = description.toLowerCase();
        let choosefrom = menu[0]['dishes'][i]['choosefrom'];
        choosefrom = choosefrom.toLowerCase();
        if (name.includes(searchword) || description.includes(searchword) || choosefrom.includes(searchword)) {
            searcharray.push(menu[0]['dishes'][i]['id']);
        }
    }
    return searcharray;
}

function renderSearch(searcharray) {
    render = '';
    for (let i = 0; i < searcharray.length; i++) {
        let index = searcharray[i];
        let price = formatPrice(menu[0]['dishes'][index]['price']);
        let cart_amount = cartAmount(index);
        render += renderSearchHtml(index, price, cart_amount);
    }
    document.getElementById('menu').innerHTML = render;
}

function renderSearchHtml(index, price, cart_amount) {
    render += `<div class="dish" onclick="addDish(${menu[0]['dishes'][index]['id']})">
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