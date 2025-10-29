
//Смена цвета всех карточек//
const productCards = document.querySelectorAll('.product-card');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');
const greenColorHash = '#00FF00';

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash ) 
})

//Смена цвета первой картоочки//
const firstProductCard = document.querySelector('.product-card');
const chageColorFirstCardButton = document.querySelector('#change-color-first-card');
const bluColorHash = '#0000FF';

chageColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = bluColorHash
})

//Открыть Google//
const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) 
    window.open('https://google.com');
}

//переключение цвета кнопки принажатии//
const changingButtonColor = document.querySelector('.bg-aqua');

changingButtonColor.addEventListener('click', () => {
  changingButtonColor.classList.toggle('bg-blue');
}) 

//Выведение в консоль принаведении на текст//
const title = document.querySelector('.main-title');
const headerContent = title.textContent;

title.addEventListener('mouseover', () => {
  console.log(headerContent);
})