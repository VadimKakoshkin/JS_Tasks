const data = [
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
];
/*
В переменной data хранится такой массив:
[
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
]
*/
calcAvgAge(data);

function calcAvgAge(array) {
  // Напишите код здесь
  let sum = 0;
  for (const person of array) {
    sum += person.age;
  }
  return Math.round(sum / array.length);
}

