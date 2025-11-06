//№1 Температура на улице

function showCityTemperature(city, temperature) {
  console.log(`Сейчас в городе ${city} температура ${temperature} градусов по Цельсию`);
}
showCityTemperature("Кизляр", 14);

//№2 Измерение скорости

const SOUND_SPEED = 343;

function checkSpeed(speed) {
  if (speed >= SOUND_SPEED) {
    console.log("сверхзвуковая скорость");
  } else {
    console.log("дозвуковая скорость");
  }
}
checkSpeed(400)

//№3 Покупка товара 

const productName = "Колесо";
const productPrice = 3450;

function buyProduct(currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${productPrice - currentBudget}, пополните баланс`);
  }
}
buyProduct(3000)

//№4 Математические действия

function deletion(num) {
  console.log(num / 5);
}
deletion(505);

//#5 Три переменные

var name = "Шамиль";
let age = 33;
const city = "Кизляр";



