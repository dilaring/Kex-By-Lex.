const products = [{
        id: "1",
        category: "dinner",
        name: "Красный борщ",
        image: "../meniu-img/1.JPG",
        addimage: "../meniu-img/1+.JPG",
        description: "с пампушками и сметаной",
        price: 55
    },
    {
        id: "2",
        category: "fast-food",
        name: "Бургер",
        image: "../meniu-img/2.JPG",
        addimage: "",
        addvideo: "../meniu-img/2+.mp4",
        description: "куриная грудка, грибы, сыр",
        price: 75
    },
    {
        id: "3",
        category: "bakery",
        name: "Тирамису",
        image: "../meniu-img/3.JPG",
        addimage: "../meniu-img/3+.JPG",
        addvideo: "",
        description: "",
        price: 60
    },
    {
        id: "4",
        category: "breakfast",
        name: "Блины сладкие",
        image: "../meniu-img/4.JPG",
        addimage: "../meniu-img/4+.JPG",
        addvideo: "",
        description: "шоколад/ карамель/ заварной крем/ ягодный джем",
        price: 35
    },
    {
        id: "5",
        category: "pizza",
        name: "Амстердам",
        image: "../meniu-img/5.JPG",
        addimage: "../meniu-img/5+.JPG",
        addvideo: "",
        description: "соус помодоро, тунец, моцарелла, оливки, перец",
        price: 160
    },
    {
        id: "6",
        category: "breakfast",
        name: "Яичница",
        image: "../meniu-img/6.JPG",
        addimage: "../meniu-img/6+.JPG",
        addvideo: "",
        description: "2 яйца, ветчина, помидоры черри, зелень",
        price: 65
    },
    {
        id: "7",
        category: "breakfast",
        name: "Тосты",
        image: "../meniu-img/7.jpg",
        addimage: "",
        addvideo: "",
        description: "круассан, соус, лист салата, ветчина,сыр, огурец, помидор",
        price: 36
    },
    {
        id: "8",
        category: "breakfast",
        name: "Блины",
        image: "../meniu-img/8.png",
        addimage: "",
        addvideo: "",
        description: "(куриная грудка, грибы, сыр, сливочный соус)",
        price: 55
    },
    {
        id: "9",
        category: "breakfast",
        name: "Сэндвич",
        image: "../meniu-img/9.JPG",
        addimage: "../meniu-img/9+.JPG",
        addvideo: "",
        description: "круассан, соус, лист салата, ветчина,сыр, огурец, помидор",
        price: 38
    },
    {
        id: "10",
        category: "dinner",
        name: "Суп Зама",
        image: "../meniu-img/10.JPG",
        addimage: "../meniu-img/10+.JPG",
        addvideo: "",
        description: "суп с сухариками",
        price: 55
    },
    {
        id: "11",
        category: "dinner",
        name: "Мексиканский",
        image: "../meniu-img/11.JPG",
        addimage: "",
        addvideo: "",
        description: "суп с сухариками",
        price: 55
    },
    {
        id: "12",
        category: "dinner",
        name: "Чечевичный",
        image: "../meniu-img/12.JPG",
        addimage: "",
        addvideo: "",
        description: "суп с сухариками",
        price: 45
    },
    {
        id: "13",
        category: "dinner",
        name: "Пельмени Говяжьи",
        image: "../meniu-img/13.JPG",
        addimage: "",
        addvideo: "",
        description: "",
        price: "75"
    },
    {
        id: "47",
        category: "dinner",
        name: "Пельмени Куриные",
        image: "../meniu-img/13.JPG",
        addimage: "",
        addvideo: "",
        description: "",
        price: "55"
    },
    {
        id: "14",
        category: "salads",
        name: "Цезарь с креветками",
        image: "../meniu-img/14.JPG",
        addimage: "",
        addvideo: "",
        description: "",
        price: "95"
    },
    {
        id: "15",
        category: "salads",
        name: "Цезарь с курицей",
        image: "../meniu-img/15.JPG",
        addimage: "",
        addvideo: "",
        description: "",
        price: "135"
    },
    {
        id: "16",
        category: "salads",
        name: "Салат с тунцом",
        image: "../meniu-img/16.jpg",
        addimage: "",
        addvideo: "",
        description: "",
        price: "95"
    },
    {
        id: "17",
        category: "salads",
        name: "Салат Греческий",
        image: "../meniu-img/17.jpg",
        addimage: "",
        addvideo: "",
        description: "",
        price: "75"
    },
    {
        id: "18",
        category: "fast-food",
        name: "Картошка-фри",
        image: "../meniu-img/18.jpg",
        addimage: "",
        addvideo: "",
        description: "",
        price: "42"
    },
    {
        id: "19",
        category: "fast-food",
        name: "Картофельные-шарики",
        image: "../meniu-img/19.png",
        addimage: "",
        addvideo: "",
        description: "",
        price: 55
    },
    {
        id: "20",
        category: "fast-food",
        name: "Картошка по-деревенски",
        image: "../meniu-img/20.jpg",
        addimage: "",
        addvideo: "",
        description: "",
        price: 55
    },
    {
        id: "21",
        category: "fast-food",
        name: "Ассорти-Фри",
        image: "../meniu-img/21.JPG",
        addimage: "../meniu-img/21+.JPG",
        addvideo: "",
        description: "",
        price: 95
    },
    {
        id: "22",
        category: "fast-food",
        name: "Наггетсы",
        image: "../meniu-img/22.jpg",
        addimage: "",
        addvideo: "",
        description: "",
        price: 55
    },

    {
        id: "23",
        category: "pizza",
        name: "Классическая",
        image: "../meniu-img/23.jpg",
        addimage: "",
        addvideo: "../meniu-img/23+.mp4",
        description: "соус помодоро, колбаса, сыр, помидоры, грибы, перец",
        price: 125
    },
    {
        id: "24",
        category: "pizza",
        name: "Гавайская",
        image: "../meniu-img/24.JPG",
        addimage: "../meniu-img/24+.JPG",
        addvideo: "",
        description: "соус сливочный, куриная грудка, сыр, перец, кукуруза, ананасы",
        price: 140
    },
    {
        id: "25",
        category: "pizza",
        name: "4 Сыра",
        image: "../meniu-img/25.JPG",
        addimage: "",
        addvideo: "",
        description: "соус помодоро, моцарелла, эдамер, чеддер, пармезан",
        price: 135
    },
    {
        id: "26",
        category: "pizza",
        name: "Италия",
        image: "../meniu-img/26.JPG",
        addimage: "../meniu-img/26+.JPG",
        addvideo: "",
        description: "соус помодоро, моцарелла, ветчина, кукуруза, грибы, перец, спек",
        price: 145
    },
    {
        id: "27",
        category: "pizza",
        name: "Пеперони",
        image: "../meniu-img/27.JPG",
        addimage: "",
        addvideo: "",
        description: "соус помодоро, моцарелла, колбаса пеперони",
        price: 125
    },
    {
        id: "28",
        category: "pizza",
        name: "Маргаритта",
        image: "../meniu-img/28.JPG",
        addimage: "../meniu-img/28+.JPG",
        addvideo: "",
        description: "соус сливочный,моцарелла, помидоры, базилик",
        price: 125
    },
    {
        id: "29",
        category: "pizza",
        name: "Олли",
        image: "../meniu-img/29.jpg",
        addimage: "",
        addvideo: "",
        description: "соус сливочный, ветчина, колбаса, кукуруза, перец",
        price: 135
    },
    {
        id: "30",
        category: "pizza",
        name: "4 Мяса",
        image: "../meniu-img/30.jpg",
        addimage: "",
        addvideo: "",
        description: "соус помодоро, сыр моцарелла, 4 вида мяса",
        price: 175
    },
    {
        id: "31",
        category: "paste",
        name: "Фeттучини",
        image: "../meniu-img/31.JPG",
        addimage: "../meniu-img/31+.JPG",
        addvideo: "",
        description: "с курицей и грибами ",
        price: 135
    },
    {
        id: "32",
        category: "paste",
        name: "Феттучини с креветками",
        image: "../meniu-img/32.JPG",
        addimage: "",
        addvideo: "",
        description: "",
        price: 165
    },
    {
        id: "33",
        category: "paste",
        name: "Феттучини с креветками",
        image: "../meniu-img/33.JPG",
        addimage: "../meniu-img/33+.JPG",
        addvideo: "",
        description: "в томатном соусе",
        price: 165
    },
    {
        id: "34",
        category: "paste",
        name: "Паста 4 сыра",
        image: "../meniu-img/34.JPG",
        addimage: "../meniu-img/34+.JPG",
        addvideo: "",
        description: "моцарелла, чеддер, эдамер, пармезан",
        price: 95
    },
    {
        id: "35",
        category: "paste",
        name: "Фунчоза",
        image: "../meniu-img/35.JPG",
        addimage: "../meniu-img/35+.JPG",
        addvideo: "",
        description: "Рисовая лапша, кур. грудка, грибы, перец, соевый соус, соус терияки",
        price: 85
    },
    {
        id: "36",
        category: "paste",
        name: "Фунчоза с креветками",
        image: "../meniu-img/36.JPG",
        addimage: "",
        addvideo: "",
        description: "броколли, цветная капуста, перец, соус терияки",
        price: 135
    },
    {
        id: "37",
        category: "breakfast",
        name: "Панкейки",
        image: "../meniu-img/37.JPG",
        addimage: "../meniu-img/37+.JPG",
        addvideo: "",
        description: "3 панкейка",
        price: 55
    },
    {
        id: "38",
        category: "bakery",
        name: "Кекс ванильный",
        image: "../meniu-img/38.JPG",
        addimage: "",
        addvideo: "",
        description: "",
        price: 20
    },
    {
        id: "39",
        category: "bakery",
        name: "Кекс шоколадный",
        image: "../meniu-img/39.JPG",
        addimage: "",
        addvideo: "",
        description: "",
        price: 22
    },
    {
        id: "40",
        category: "bakery",
        name: "Пирог с вишней",
        image: "../meniu-img/40.jpg",
        addimage: "../meniu-img/40+.jpg",
        addvideo: "",
        description: "",
        price: 32
    },
    {
        id: "41",
        category: "bakery",
        name: "Чизкейк",
        image: "../meniu-img/41.JPG",
        addimage: "",
        addvideo: "",
        description: "",
        price: 35
    },
    {
        id: "42",
        category: "bakery",
        name: "Эклер",
        image: "../meniu-img/42.JPG",
        addimage: "../meniu-img/42+.JPG",
        addvideo: "",
        description: "",
        price: 23
    },
    {
        id: "43",
        category: "bakery",
        name: "Сырники",
        image: "../meniu-img/43.jpg",
        addimage: "",
        addvideo: "",
        description: "",
        price: 17
    },
    {
        id: "44",
        category: "bakery",
        name: "Вафли с начинкой",
        image: "../meniu-img/44.JPG",
        addimage: "",
        addvideo: "",
        description: "Шоколад/ карамель/ заварной крем/ ягодный джем",
        price: "22"
    },
    {
        id: "45",
        category: "bakery",
        name: "Поча с мясом",
        image: "../meniu-img/45.JPG",
        addimage: "../meniu-img/45+.JPG",
        addvideo: "",
        description: "",
        price: "18"
    },
    {
        id: "48",
        category: "bakery",
        name: "Поча с творогом",
        image: "../meniu-img/45+.JPG",
        addimage: "../meniu-img/45.JPG",
        addvideo: "",
        description: " ",
        price: "15"
    },
    {
        id: "46",
        category: "bakery",
        name: "Круассан",
        image: "../meniu-img/46.JPG",
        addimage: "../meniu-img/46+.JPG",
        addvideo: "",
        description: "Шоколад/ карамель/ заварной крем/ ягодный джем",
        price: 25
    }

];