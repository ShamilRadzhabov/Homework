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
  productCardClone.querySelector('.product-compound-iteam').innerHTML = card.compound.map(item => `<li>${item}</li>`).join("");
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

const ProductCardArray = productCards.reduce((acc, card) => {
    acc.push({[card.productTitle]: card.description});
    return acc;
}, []);

console.log(ProductCardArray);

// №4 Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом.

const showCards = () => {
  const question = prompt("Сколько карточек отобразить? От 1 до 5");
  const numbers = Number(question);
  if (numbers > 0 && numbers <= productCards.length) {
    outputProductCards(productCards.slice(0, numbers));
  } else {
    alert("Введите число от 1 до 5");
  }
}

showCards()

