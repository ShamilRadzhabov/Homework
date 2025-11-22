// №3 Создание объекта на основе мотх данных

const userProfile = {
  firstName: "Шамиль",
  lastName: "Раджабов",
  email: "shamiil@bk.ru",
  profession: "Разработчик",
  position: "Frontend",
  age: 34,
  country: "Россия",
  city: "Кизляр",
  relationshipStatus: "В браке",
};

// №4 Создал объект с данными об автомобиле

const carInfo = {
  stamp: "Mercedes benz ",
  model: "E211",
  manufactureYear: 2002,
  color: "Темно-серый",
  transmissionType: "Автоматическая",
};

carInfo.owner = userProfile;
console.log(carInfo);

// №5 Проверка объекте на наличие свойства

function checkMaxSpeed(car) {
  if (!car.hasOwnProperty("maxSpeed")) {
    carInfo.maxSpeed = 260;
  }
};

checkMaxSpeed(carInfo);

// №6 Выводим свойство и значение объекта

function showPropertyValue(obj, propName) {
  console.log(`${propName}, ${obj[propName]}`);
};
showPropertyValue(userProfile, "firstName");
showPropertyValue(userProfile, "country");

// №7 Создание массива

const productNames = ["сыр", "хлеб", "овощи", "фрукты", "молоко"];

// №8 Создание массива из объектов и добавление объекта в массив 

const featureFilms = [
  {
    title: 'Джанго Освобожденный',
    genre: 'вестарн',
    year: 2012,
    director: 'Квентина Тарантино',
    starring: 'Джейми Фокс, Кристоф Вальц, Леонардо Ди Каприо, Керри Вашингтон',
  },

  {
    title: 'Джентльмены',
    genre: 'комедийный боевик',
    year: 2019,
    director: 'Гай Ричи',
    starring: 'Мэттью Макконахи, Чарли Ханнэм, Генри Голдинг',
  },

  {
    title: 'Зелёная миля',
    genre: 'фэнтезийный драматический фильм',
    year: 1999,
    director: 'Фрэнка Дарабонта',
    starring: 'Том Хэнкс, Дэвид Морс, Бонни Хант, Сэм Рокуэлл',
  },
];

featureFilms.push(
  {
    title: 'Побег из Шоушенка',
    genre: 'драматический фильм',
    year: 1994,
    director: 'Фрэнка Дарабонта',
    starring: 'Уильям Сэдлер, Клэнси Браун, Гил Беллоуз, Джеймс Уитмор',
  }
);

console.log(featureFilms);

// №9 Создание массива определенной вселенной

const marvelFilms = [
  {
    title: 'Стражи Галактики',
    genre: 'американский художественный фильм',
    year: 2014,
    director: 'Джеймса Ганна',
    starring: 'Крис Прэтт, Зои Салдана, Дейв Батиста, Вин Дизель',
  },

  {
    title: 'Доктор Стрэндж',
    genre: 'американский супергеройский фильм',
    year: 2016,
    director: 'Скотт Дерриксон',
    starring: 'Мадс Миккельсен, Чиветел Эджиофор, Рэйчел Макадамс, Бенедикт Вонг',
  },

  {
    title: 'Супермен ',
    genre: 'американский полнометражный супергеройский фильм',
    year: 2025,
    director: 'Джеймса Ганна',
    starring: 'Рэйчел Броснахэн, Николас Холт, Эди Гатеги',
  },
];

console.log(marvelFilms);

const allFilmsCollection = [...featureFilms, ...marvelFilms];
console.log(allFilmsCollection);

// №10 С помощью метода map трансформировал исходный массив в новый

const filmsArray = allFilmsCollection.map(
  film => film.isModern = film.year > 2010
);

console.log(filmsArray);
