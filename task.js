const numbers = [1, 2, 3, 4, 5, 6];

separateArray(numbers);
// должен вернуть { even: [2, 4, 6], odd: [1, 3, 5] }

function separateArray(array) {
// ваш код здесь
    let sepNumbers = {};
    sepNumbers.even = [];
    sepNumbers.odd = [];
    for (let i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i] % 2 == 1) {
            sepNumbers.odd.push(numbers[i]);
        } else {
            sepNumbers.even.push(numbers[i]);
        }
    }
    return sepNumbers;
}