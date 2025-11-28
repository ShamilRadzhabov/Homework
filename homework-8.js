import {productCards} from './product-cards.js'

// №1 Создал и реализовал шаблон для продуктовых карточек 

const productCardsList = document.querySelector('.product-wrapper');
const productCardTemplate = document.querySelector('#product-card-template');
productCards.forEach(card => {
  const productCardClone = productCardTemplate.content.cloneNode(true);
  productCardClone.querySelector('#img').src = card.url;
  productCardClone.querySelector('#img').alt = card.alt;
  productCardClone.querySelector('#title').innerHTML = card.productTitle;
  productCardClone.querySelector('#description').textContent = card.description;
  productCardClone.querySelector('#compound-element-one').textContent = card.compoundElementOne;
  productCardClone.querySelector('#compound-element-two').textContent = card.compoundElementTwo;
  productCardClone.querySelector('#compound-element-three').textContent = card.compoundElementThree;
  productCardClone.querySelector('#price').innerHTML = card.price + '&#8381'
  productCardsList.appendChild(productCardClone);
});

// №2 Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const getProductCardsTitle = productCards.reduce((acc, title) => {
  acc.push(title.productTitle);
  return acc
}, []);

const productCardsTitleStrings = getProductCardsTitle.join(';');
console.log(productCardsTitleStrings);

// №3 Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const getProductCardArray = productCards.reduce((acc, card) => {
    acc.push({[card.productTitle]: card.description});
    return acc;
}, []);

console.log(getProductCardArray);

// №4 Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом.

const ShowCards = () => {
  const question = prompt("Сколько карточек отобразить? От 1 до 5");
  const numbers = Number(question);

  if (
    isNaN(numbers) ||
    numbers < 1 ||
    numbers > 5 ||
    numbers > productCards.length
  ) {
    alert("Введите число от 1 до 5");
    return;
  }

  productCards(productCards.slice(0, numbers));
};

ShowCards();

