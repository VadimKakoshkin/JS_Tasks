var words = ['Ночь', 'Улица', 'Фонарь', 'Аптека', 'Бессмысленный', 'Тусклый', 'Свет'];

getLastElementOfArray(words); // возвращает Свет;

function getLastElementOfArray(array) {
  // Ваш код здесь
  let wordLast = words[words.length - 1];

  return wordLast;
}
