// Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок остальных элементов.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let zeroArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            zeroArr.push(0);
        }
    }
    return [...arr, ...zeroArr];
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))

//******************************************************************/

// Перенесите первую букву каждого слова в конец, а затем добавьте «ay» в конце слова. Знаки препинания не трогайте.

// Примеры
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  return str.split(' ').map((word) => {
      if (/^[a-zA-Z]+$/.test(word)) {
        return word.slice(1) + word[0] + 'ay'
      }
      return word
  }).join(' ')
}

//*****************************************************/


// Напишите функцию, которая принимает в качестве входных данных неотрицательное целое число (секунды) и возвращает время в удобочитаемом формате ( HH:MM:SS)

// HH= часы, дополненные до 2 цифр, диапазон: 00 - 99
// MM= минуты, дополненные до 2 цифр, диапазон: 00 - 59
// SS= секунды, дополненные до 2 цифр, диапазон: 00 - 59
// Максимальное время никогда не превышает 359999 ( 99:59:59)

// Некоторые примеры вы можете найти в тестовых заданиях.

function humanReadable (seconds) {
  let hours = Math.floor(seconds/3600)
  let minutes = Math.floor(((seconds)%3600)/60)
  let sec = ((seconds)%3600)%60

  function pad(num) {
  return num < 10 ? `0${num}` : `${num}`;
}
  return `${pad(hours)}:${pad(minutes)}:${pad(sec)}`;
}

console.log(humanReadable(3665))