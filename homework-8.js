import {productCards} from './product-cards.js'

// №1 Создал и реализовал шаблон для продуктовых карточек 

const productCardsList = document.querySelector('.product-wrapper');
const productCardTemplate = document.querySelector('#product-card-template');
productCards.forEach(card => {
  const productCardClone = productCardTemplate.content.cloneNode(true);
  productCardClone.querySelector('.product-img').src = `/images/${card.img}.png`
  productCardClone.querySelector('.product-category').textContent = card.category
  productCardClone.querySelector('.prouct-title').innerHTML = card.title;
  productCardClone.querySelector('.product-description').textContent = card.description;
  productCardClone.querySelector('.product-compound-iteam').innerHTML = card.compound.map(item => `<li>${item}</li>`).join("");
  productCardClone.querySelector('.product-price').innerHTML = card.price + '&#8381'
  productCardsList.appendChild(productCardClone);
});

// №2 Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const getProductCardsTitle = productCards.reduce((acc, title) => {
  acc.push(title.title);
  return acc
}, []);

const productCardsTitleStrings = getProductCardsTitle.join(';');
console.log(productCardsTitleStrings);

// №3 Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productCardArray = productCards.reduce((acc, card) => {
    acc.push({[card.productTitle]: card.description});
    return acc;
}, []);

console.log(productCardArray);

// №4 Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом.


const showCards = () => {
  const count = prompt("Сколько карточек отобразить? От 1 до 5");
  const numbers = Number(count);
  if (numbers > 0 && numbers <= productCards.length) {
    outputProductCards(productCards.slice(0, numbers));
  } else {
    alert("Введите число от 1 до 5");
  };
};

showCards()
