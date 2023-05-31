const spinWindow = document.querySelector('#spinWindow');
const wheel = document.querySelector('#spin-wheel');


let selectedType = "";

let angle = 0;

const spinBtn = document.querySelector('.spinBtn');


const foodCategories = {
    "zavtrak": ["Блины сладкие", "Яичница", "Тосты", "Блины", "Сэндвич", "Панкейки"],
    "obed": ["Красный борщ", "Суп Зама", "Мексиканский", "Чечевичный", "Пельмени куриные"],
    "salat": ["Цезарь с креветками", "Цезарь с курицей ", "Салат с тунцом", "Салат Греческий"],
    "fastfood": ["Бургер", "Картошка-фри", "Картофельные шарики", "Ассорти-фри" ,"Наггетсы"],
    "pizza": ["Амстердам", "Классическая", "Гавайская", "4 сыра", "Италия", "Пеперони", "Маргаритта", "Олли", "4 мяса"],
    "pasta": ["Феттучини", "Феттучини с креветками", "Феттучини в томат. соусе", "Паста 4 сыра", "Фунчоза", "Фунчоза с креветками"],
    "vipecika": ["Тирамису", "Кекс ванильный", "Пирог с вишней", "Эклер", "Сырники", "Вафли", "Поча с творогом", "Круассан"],
}

const colors = ['#a8451b, ','#f78325', '#572f0a', '#e37210', '#db8107',
    '#753b16', '#993800,','#FF7514', '#965421',
    ' #c27444', '#993800,', '#f78325', "#401c04"];


function showComment() {
    commentContainer.style.display = 'block';
}

function hideComment() {
    commentContainer.style.display = 'none';
}
commentContainer.addEventListener('click', function (event) {
    if (event.target == commentContainer) {
        hideComment();
    }
});

function showSpinResult() {
    spinResult.style.display = 'block';
}

function hideSpinResult() {
    spinResult.style.display = 'none';
}


function hideSpinWindow() {
    spinWindow.style.display = 'none';
    showComment();
}


function openSpinWindow(type) {

    selectedType = type;

    hideComment();

 
    setProducts();


    spinWindow.style.display = 'block';
}


function setProducts() {
    
    let html = '';

    let foods = foodCategories[selectedType];

    wheel.innerHTML = '';

    let grade = 360 / foods.length;
    let skewGrade = 90 - grade;

    for (let i = 0; i < foods.length; i++) {
        html += `
        <li style='background-color:${colors[i]}; transform: rotate(${i * grade}deg) skewY(-${skewGrade}deg);   '>
            <div class="number" style='transform: skewY(${skewGrade}deg) rotate(${(grade / 2)}deg);'>${foods[i]}</div>
        </li>
        `;
    }

    wheel.innerHTML = html;
}


spinBtn.addEventListener('click', () => {

    angle = Math.floor(Math.random() * 5000);
    wheel.style.transform = `rotate(${angle}deg)`;

    setTimeout(() => {
        console.log(angle);

        let foods = foodCategories[selectedType];
        const foodIndex = Math.trunc((360 - (angle % 360))  / (360 / foods.length));
        const selectedFood = foods[foodIndex];

        for (let i = 0; i < products.length; i++)
        {
        if (products[i].name == selectedFood)
                {
                    hideSpinWindow();
                    hideComment();
                    showSpinResult();
                    
                    ResNum.innerHTML = i;
                    ResName.innerHTML = products[i].name;
                    ResInfo.innerHTML = products[i].description;
                    ResPrice.innerHTML = products[i].price + " lei";
                    ResPhoto.src = products[i].image;

                    break;            
                }
        }
    }, 5000);
})

