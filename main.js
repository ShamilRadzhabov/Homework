const productCards = document.querySelectorAll('.product-card');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');
const greenColorHash = '#00FF00';
const bluColorHash = '#0000FF';

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash ) 
})

const firstProductCard = document.querySelector('.product-card');
const chageColorFirstCardButton = document.querySelector('#change-color-first-card');


chageColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = bluColorHash
})

const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) 
    window.open('https://google.com');
}

const changingButtonColor = document.querySelector('.bg-aqua');

changingButtonColor.addEventListener('click', () => {
  changingButtonColor.classList.toggle('bg-blue');
}) 

const title = document.querySelector('.main-title');
const headerContent = title.textContent;

title.addEventListener('mouseover', () => {
  console.log(headerContent);
})