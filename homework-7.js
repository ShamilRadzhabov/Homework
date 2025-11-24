import {comments} from './comments.js'

// №1 Создал массив из чисел и отфильтровал его

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numbers.slice(4);
console.log(newArray);

// №2 Создал массив строк и проверил, есть ли в массиве какая-то определенная сущность

const films = ['Джанго Освобожденный','Джентльмены', 'Зелёная миля', 'Побег из Шоушенка', 'Стражи Галактики', 'Доктор Стрэндж', 'Супермен' ]

console.log(films.includes('Зелёная миля'));

// №3 Написал функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") 

const getReverseArray = (arr) => {
  return arr.reverse();
}; 

getReverseArray(newArray)
console.log(getReverseArray(films));
 
// №4 Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const checkEmail = comments.filter(email => email.email.endsWith('.com'));
console.log(checkEmail);

// №5 Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const checkUserId = comments.map(user => ({...user, postId: user.id <= 5 ? 2 : 1 }));
console.log(checkUserId);

// №6 Перебрать массив, что бы объекты состояли только из айди и имени

const updateArray = comments.map(arr => ({id: arr.id, name: arr.name}));
console.log(updateArray);

// №7  Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const validatedComments = comments.map(user => ({...user, isInvalid: user.body.length > 180}));
console.log(validatedComments);

// №8 Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const mappedEmails = comments.map(user => ({email: user.email}));

const showUserEmails = comments.reduce((acc, user) => {
  acc.push(user.email);
  return acc;
}, []);

console.log(mappedEmails);
console.log(showUserEmails);

// №9 Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const mapToString = showUserEmails.toString();
const convertArrayToString = showUserEmails.join(' ');

console.log(mapToString);
console.log(convertArrayToString);




