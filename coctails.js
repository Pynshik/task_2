import { HashStorage } from './HashStorage.js';

let coctailsStorage = new HashStorage();

coctailsStorage.addValue('Пина колада', {
    name: 'Пина колада', isAlcohol: 'Да', ingredients: `1.5 стакана льда, 
    0.5 стакана замороженного ананаса, 
    нарезанного кубиками, 
    60 мл ананасового сока, 
    60 мл кокосовых сливок, 
    45 мл светлого рома, 
    30 мл тёмного рома, 
    дольки ананаса`,
    description: `Блендером смешайте все ингредиенты до однородной консистенции. Разлейте по двум бокалам вида харрикейн и украсьте ананасовыми дольками. 
    
    Кстати, подавать напиток можно прямо в ананасе, предварительно вырезав из него мякоть.`});
coctailsStorage.addValue('Дайкири', {
    name: 'Дайкири', isAlcohol: 'Да', ingredients: `60 мл светлого рома,
    30 мл сока лайма,
    15 мл сахарного сиропа,
    лёд`,
    description: 'Соедините все ингредиенты в шейкере. Взболтайте до охлаждения и разлейте по коктейльным бокалам, процедив через сито или стрейнер. Бокалы нужно предварительно охладить.'
});
coctailsStorage.addValue('Май тай', {
    name: 'Май тай', isAlcohol: 'Да', ingredients: `лёд кубиками,
    60 мл светлого рома,
    40 мл тёмного рома,
    20 мл куантро,
    10 мл сока лайма,
    60 мл ананасового сока,
    60 мл апельсинового сока,
    4–5 капель сиропа гренадин`,
    description: `Положите лёд — его должно быть много — в шейкер и добавьте остальные ингредиенты. Взбалтывайте 20 секунд. Содержимое должно хорошо охладиться.

    Подавать коктейль рекомендуется в коротких стаканах. Наполнить их можно двумя способами:
    
    Перелейте содержимое в стакан вместе со льдом, который есть в шейкере.
    Наполните ёмкость новым льдом и с помощью сита или стрейнера процедите жидкость, чтобы старый лёд остался в шейкере.
    Напиток можно украсить веточкой мяты и долькой лайма.`});

addToTable(coctailsStorage['Пина колада'].name, coctailsStorage['Пина колада'].isAlcohol, coctailsStorage['Пина колада'].ingredients, coctailsStorage['Пина колада'].description);
addToTable(coctailsStorage['Дайкири'].name, coctailsStorage['Дайкири'].isAlcohol, coctailsStorage['Дайкири'].ingredients, coctailsStorage['Дайкири'].description);
addToTable(coctailsStorage['Май тай'].name, coctailsStorage['Май тай'].isAlcohol, coctailsStorage['Май тай'].ingredients, coctailsStorage['Май тай'].description);


let enterBtn = document.getElementById('enterInfo');
let recipe = document.getElementById('recipe');
let deleteBtn = document.getElementById('deleteInfo');
let allCoctails = document.getElementById('allCoctails');

enterBtn.addEventListener('click', addCoctail);
recipe.addEventListener('click', getCoctail);
deleteBtn.addEventListener('click', deleteCoctail);
allCoctails.addEventListener('click', getAllCoctails);

function addCoctail() {
    let name = prompt('Введите название коктейля', 'Святой Патрик');

    if (coctailsStorage[name]) {
        alert('Такой коктейль уже добавлен. Спасибо.')
    }

    let isAlcohol = prompt('Напиток алкогольный?(Да, нет)', 'Да');
    let ingredients = prompt('Введите название енгредиентов и их количество');
    let description = prompt('Введите способ приготовления');

    addToTable(name, isAlcohol, ingredients, description);

    coctailsStorage.addValue(name, { name, isAlcohol, ingredients, description });

}

function getCoctail() {
    let name = prompt('Введите название коктейля', 'Святой Патрик');
    let coctailInfo = coctailsStorage.getValue(name);

    let showCoctail = document.getElementById('showCoctail');
    showCoctail.innerHTML = `<b>${coctailInfo.name}</b>(алкогольный: ${coctailInfo.isAlcohol}) <br/>
        <b>Ингредиенты:</b> <br/>${coctailInfo.ingredients} <br/>
        <b>Способ приготовления:</b> <br/> ${coctailInfo.description}`;
}

function deleteCoctail() {
    let name = prompt('Введите название коктейля', 'Святой Патрик');

    if(!coctailsStorage.getValue(name)){
        return;
    }

    coctailsStorage.deleteValue(name);
    
    let elements = document.querySelectorAll('td');
    
    elements.forEach(el => {
        if (el.textContent.includes(name)) {
            el.parentElement.remove();
        }
    })
}

function getAllCoctails() {
    let coctailsArray = coctailsStorage.getKeys();

    let showAllCoctails = document.getElementById('showAllCoctails');
    showAllCoctails.innerHTML = coctailsArray.join(', ');
}

function addToTable(name, isAlcohol, ingredients, description) {
    let tbody = document.getElementById('coctails').getElementsByTagName('tbody')[0];

    let row = document.createElement('tr');
    tbody.appendChild(row);

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    td1.innerHTML = `${name}<br/>(алкогольный: ${isAlcohol})`;
    td2.innerHTML = ingredients;
    td3.innerHTML = description;
}