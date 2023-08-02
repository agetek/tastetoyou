let menu =
    [
        {
            'categories': [
                {
                    'name': 'Beliebt',
                    'anchor': 'popular',
                    'img': '',
                    'members': [0, 1],
                    'offset': 0,
                },
                {
                    'name': 'Menüs',
                    'anchor': 'menue',
                    'img': 'restaurant_ofenkartoffeln2.avif',
                    'members': [0, 2, 3, 4, 5, 6, 7],
                    'offset': 0,
                },
                {
                    'name': 'Suppen',
                    'anchor': 'soups',
                    'img': 'gemuese_gemuese.avif',
                    'members': [8],
                    'offset': 0,
                },
                {
                    'name': 'Vegane Gerichte',
                    'anchor': 'vegan',
                    'img': 'gemuese_paprika.avif',
                    'members': [9, 10],
                    'offset': 0,
                },
                {
                    'name': 'Vegetarische Gerichte',
                    'anchor': 'vegetarian',
                    'img': 'gemuese_kohl.avif',
                    'members': [11, 12],
                    'offset': 0,
                },
                {
                    'name': 'Fleischgerichte',
                    'anchor': 'meat',
                    'img': 'restaurant_leber.avif',
                    'members': [13, 14, 15],
                    'offset': 0,
                },
                {
                    'name': 'Desserts',
                    'anchor': 'desserts',
                    'img': 'desserts_kuchen_apfelstrudel.avif',
                    'members': [16, 17],
                    'offset': 0,
                },
                {
                    'name': 'Alkoholfreie Getränke',
                    'anchor': 'drinks',
                    'img': 'tuerkisch_ayran.avif',
                    'members': [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                    'offset': 0,
                },
            ],
            'dishes': [
                {
                    'id': 0,
                    'name': 'Mix Teller Menü',
                    'description': '<ul><li>3 Gerichte nach Wahl</li><li>grüner Salat</li><li>Tzatziki</li><li>Brot</li></ul>',
                    'choosefrom': 'Wahl aus: Bulgurreis, vegan, Gefüllte Auberginen, Kartoffelauflauf, vegetarisch, Kichererbseneintopf, Köfte und mehr.',
                    'price': 11.90,
                    'note': '',
                },
                {
                    'id': 1,
                    'name': 'Linsensuppe (vegan) [Groß]',
                    'description': 'aus frischen roten Linsen',
                    'choosefrom': '',
                    'price': 6.90,
                    'note': '',
                },
                {
                    'id': 2,
                    'name': 'Zucchinipuffer Menü (vegetarisch)',
                    'description': 'Zucchinipuffer auf dem Teller mit Salat und Soße',
                    'choosefrom': '',
                    'price': 5.90,
                    'note': '',
                },
                {
                    'id': 3,
                    'name': 'Zucchinipuffer im Brot Menü (vegetarisch)',
                    'description': 'selbstgemachte Zucchinipuffer im Brot mit grünem Salat und hausgemachter Sauce, dazu ein Getränk nach Wahl',
                    'choosefrom': 'Wahl aus: Ayran 0,2l, Club Mate 0,5l, Coca-Cola 0,33l (MEHRWEG), Coca-Cola light taste 0,33l (MEHRWEG), Coca-Cola Zero Sugar 0,33l (MEHRWEG) und mehr.',
                    'price': 6.50,
                    'note': '',
                },
                {
                    'id': 4,
                    'name': 'Köfte Menü',
                    'description': '6 Stk. Köfte mit gebratenem Paprika mit Salat und Soße auf dem Teller > Fleisch',
                    'choosefrom': '',
                    'price': 6.90,
                    'note': '',
                },
                {
                    'id': 5,
                    'name': 'Köfte im Brot Menü',
                    'description': 'Rinderbuletten mit gebratener Paprika, grünem Salat und hausgemachter Sauce im Brot, dazu ein Getränk nach Wahl',
                    'choosefrom': 'Wahl aus: Ayran 0,2l, Club Mate 0,5l, Coca-Cola 0,33l (MEHRWEG), Coca-Cola light taste 0,33l (MEHRWEG), Coca-Cola Zero Sugar 0,33l (MEHRWEG) und mehr.',
                    'price': 6.50,
                    'note': '',
                },
                {
                    'id': 6,
                    'name': 'Falafel Menü (vegetarisch)',
                    'description': '6 Stk. Falafel mit Salat und Soße auf dem Teller',
                    'choosefrom': 'Wahl aus: Ayran 0,2l, Club Mate 0,5l, Coca-Cola 0,33l (MEHRWEG), Coca-Cola light taste 0,33l (MEHRWEG), Coca-Cola Zero Sugar 0,33l (MEHRWEG) und mehr.',
                    'price': 6.90,
                    'note': '',
                },
                {
                    'id': 7,
                    'name': 'Falafel im Brot Menü (vegetarisch)',
                    'description': 'selbstgemachte Falafel im Brot mit grünem Salat und hausgemachter Sauce, dazu ein Getränk nach Wahl',
                    'choosefrom': 'Wahl aus: Ayran 0,2l, Club Mate 0,5l, Coca-Cola 0,33l (MEHRWEG), Coca-Cola light taste 0,33l (MEHRWEG), Coca-Cola Zero Sugar 0,33l (MEHRWEG) und mehr.',
                    'price': 6.50,
                    'note': '',
                },
                {
                    'id': 8,
                    'name': 'Linsensuppe (vegan)',
                    'description': 'aus frischen roten Linsen',
                    'choosefrom': 'Wahl aus: Klein oder Groß.',
                    'price': 4.50,
                    'note': '',
                },
                {
                    'id': 9,
                    'name': 'Reis',
                    'description': '',
                    'choosefrom': '',
                    'price': 6.90,
                    'note': '',
                },
                {
                    'id': 10,
                    'name': 'Pilzeintopf',
                    'description': 'mit frischen klein geschnittenen Pilzen und Paprikastückchen',
                    'choosefrom': '',
                    'price': 6.90,
                    'note': '',
                },
                {
                    'id': 11,
                    'name': 'Zucchinipuffer',
                    'description': '',
                    'choosefrom': '',
                    'price': 6.90,
                    'note': '',
                },
                {
                    'id': 12,
                    'name': 'Kartoffelauflauf',
                    'description': 'mit Käse überbacken',
                    'choosefrom': '',
                    'price': 6.90,
                    'note': '',
                },
                {
                    'id': 13,
                    'name': 'Köfte',
                    'description': 'mit gebratener Paprika',
                    'choosefrom': '',
                    'price': 6.90,
                    'note': '',
                },
                {
                    'id': 14,
                    'name': 'Kichererbseneintopf',
                    'description': 'mit Rindfleisch',
                    'choosefrom': '',
                    'price': 6.90,
                    'note': '',
                },
                {
                    'id': 15,
                    'name': 'Gefüllte Auberginen',
                    'description': 'mit Rinderhackfleisch',
                    'choosefrom': '',
                    'price': 6.90,
                    'note': '',
                },
                {
                    'id': 16,
                    'name': 'Milchreis',
                    'description': 'Wahl aus: mit roter Grütze oder mit Zimt.',
                    'choosefrom': '',
                    'price': 4.00,
                    'note': '',
                },
                {
                    'id': 17,
                    'name': 'Apfelzimtstreußel',
                    'description': 'mit Äpfeln, Nüssen und Zimt',
                    'choosefrom': '',
                    'price': 2.50,
                    'note': '',
                },
                {
                    'id': 18,
                    'name': 'Coca-Cola 0,33l (MEHRWEG)',
                    'description': 'Coca-Cola steht für einzigartigen Geschmack, Erfrischung und Momente voller Lebensfreude. Die 0,33l Glas-Mehrwegflasche ist unsere Ikone für perfekten Trinkgenuss seit 1886.',
                    'choosefrom': '',
                    'price': 2.50,
                    'note': 'Enthält Koffein (10,00 mg/100 ml), inkl. Pfand (0,15 €), 7,27 €/l, 330ml'
                },
                {
                    'id': 19,
                    'name': 'Coca-Cola Zero Sugar 0,33l (MEHRWEG)',
                    'description': 'Keine Kalorien. Null Zucker. Für alle Coke Liebhaber, die beim Geschmack keinen Kompromiss eingehen wollen.',
                    'choosefrom': '',
                    'price': 2.50,
                    'note': 'Enthält Koffein (10,00 mg/100 ml), inkl. Pfand (0,15 €), 7,27 €/l, 330ml'
                },
                {
                    'id': 20,
                    'name': 'Coca-Cola light taste 0,33l (MEHRWEG)',
                    'description': 'Light taste: Leichter als das Original und in stylischem Design überzeugt Cola Light nicht nur die eigene Fangemeinschaft - und das komplett zucker- und kalorienfrei.',
                    'choosefrom': '',
                    'price': 2.50,
                    'note': 'Enthält Koffein (12,00 mg/100 ml), inkl. Pfand (0,15 €), 7,27 €/l, 330ml'
                },
                {
                    'id': 21,
                    'name': 'Fanta Orange 0,33l (MEHRWEG)',
                    'description': 'Trinke Fanta. Lebe bunter. Spritzig erfrischend begleitet die originale Fanta Orange jede Lebenssituation und macht jetzt noch mehr Spaß.',
                    'choosefrom': '',
                    'price': 2.50,
                    'note': 'inkl. Pfand (0,15 €), 7,27 €/l, 330ml'
                },
                {
                    'id': 22,
                    'name': 'Mezzo Mix 0,33l (MEHRWEG)',
                    'description': 'Mixt euch eine gute Zeit mit mezzo mix, dem erfrischend-leckeren Kuss aus Cola und Orange.',
                    'choosefrom': '',
                    'price': 2.50,
                    'note': 'Enthält Koffein (6,00 mg/100 ml), inkl. Pfand (0,15 €), 7,27 €/l, 330ml'
                },
                {
                    'id': 23,
                    'name': 'Fritz-kola 0,33l',
                    'description': '',
                    'choosefrom': '',
                    'price': 2.50,
                    'note': 'Enthält Koffein (25,00 mg/100 ml), inkl. Pfand (0,08 €), 7,41 €/l, 330ml'
                },
                {
                    'id': 24,
                    'name': 'Fritz-orange 0,33l',
                    'description': '',
                    'choosefrom': '',
                    'price': 2.50,
                    'note': 'inkl. Pfand (0,08 €), 7,41 €/l, 330ml'
                },
                {
                    'id': 25,
                    'name': 'Fritz-limo 0,33l',
                    'description': '',
                    'choosefrom': '',
                    'price': 2.50,
                    'note': 'inkl. Pfand (0,08 €), 7,41 €/l, 330ml'
                },
                {
                    'id': 26,
                    'name': 'Fritz Apfelschorle 0,33l',
                    'description': '',
                    'choosefrom': '',
                    'price': 2.50,
                    'note': 'inkl. Pfand (0,08 €), 7,41 €/l, 330ml'
                },
                {
                    'id': 27,
                    'name': 'Club Mate 0,5l',
                    'description': '',
                    'choosefrom': '',
                    'price': 2.80,
                    'note': 'Enthält Koffein (20,00 mg/100 ml), inkl. Pfand (0,15 €), 5,45 €/l, 500ml'
                },
                {
                    'id': 28,
                    'name': 'Ayran 0,2l',
                    'description': '',
                    'choosefrom': '',
                    'price': 1.50,
                    'note': '7,50 €/l, 200ml'
                },
                {
                    'id': 29,
                    'name': 'Spezi 0,5l',
                    'description': '',
                    'choosefrom': '',
                    'price': 2.80,
                    'note': 'Enthält Koffein (6,00 mg/100 ml), inkl. Pfand (0,15 €), 5,45 €/l, 500ml'
                },
                {
                    'id': 30,
                    'name': 'Wasser still 0,5l',
                    'description': '',
                    'choosefrom': '',
                    'price': 1.50,
                    'note': 'inkl. Pfand (0,25 €), 2,75 €/l, 500ml'
                },
            ],
        },
    ];

let cart = [];

let toggle_id_old = -1;

let mindestbestellwert = 10.0;

let lieferkosten = 0.0;

let servicegebuehr = 0.89;

let zwischensumme = 0;

let gesamt = 0;

let edit = -1;

let moover = 0;

let anchorrowlength = 0;

let screenwidth = 0;

let mobile = false;

let inmobilecart = false;

let search = false;