// Если перечислить все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих кратных равна 23.

// Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5, ниже переданного числа.

// Кроме того, если число отрицательное, верните 0.

// Примечание: если число кратно и 3, и 5, считайте его только один раз .

function solution(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(solution(10))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но все слова, содержащие пять или более букв, перевёрнуты (как в названии этого ката). Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут учитываться только при наличии нескольких слов.

// Примеры:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string){
  const wordArray = string.split(' ')
  for (i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length >=5) {
        wordArray[i] = wordArray[i].split('').reverse().join('')
    }
  }
  return(wordArray.join(' '))
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Вы, вероятно, знакомы с системой «лайков» на Facebook и других страницах. Люди могут ставить отметки «Нравится» публикациям в блогах, фотографиям и другим материалам. Мы хотим создать текст, который будет отображаться рядом с таким материалом.

// Реализуйте функцию, которая принимает массив имён людей, которым понравился товар. Функция должна возвращать отображаемый текст, как показано в примерах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Примечание: для 4 и более имен число "and 2 others"просто увеличивается.

function likes(names) {
  const singleSuffix =  "likes this"
  const pluralSuffix =  "like this"
  let message
  switch (names.length) {
      case 0:
      message = `no one ${singleSuffix}`
      break;
      case 1:
      message = `${names[0]} ${singleSuffix}`
      break;
      case 2:
      message = `${names[0]} and ${names[1]} ${pluralSuffix}`
      break;
      case 3:
      message = `${names[0]}, ${names[1]} and ${names[2]} ${pluralSuffix}`
      break;
      default:
      message = `${names[0]}, ${names[1]} and ${names.length - 2} others ${pluralSuffix}`
  }
  return message
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.

// Всегда будет только одно целое число, которое встречается нечетное количество раз.

// Примеры
// [7]должен вернуть 7, так как встречается 1 раз (что нечетно).
// [0]должен вернуть 0, так как встречается 1 раз (что нечетно).
// [1,1,2]должен вернуть 2, так как встречается 1 раз (что нечетно).
// [0,1,0,1,0]должен вернуть 0, так как встречается 3 раза (что нечетно).
// [1,2,2,3,3,3,4,3,3,3,2,2,1]должен вернуть 4, так как встречается 1 раз (что нечетно).


function findOdd(numbers) {
  const countMap = {};
  let oddOccurrenceNumber;

  numbers.forEach((number) => {
    countMap[number] = countMap[number] ? countMap[number] + 1 : 1;
  });

  for (const number in countMap) {
    if (countMap[number] % 2 !== 0) {
      oddOccurrenceNumber = Number(number);
    }
  }

  return oddOccurrenceNumber;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Реализуйте функцию, вычисляющую разницу между двумя списками. Функция должна удалять все вхождения элементов из первого списка ( a), присутствующие во втором списке ( b). Порядок элементов в первом списке должен сохраняться в результате.

// Примеры
// Если a = [1, 2]и b = [1], то результат должен быть [2].

// Если a = [1, 2, 2, 2, 3]и b = [2], то результат должен быть [1, 3].

function arrayDiff(a, b) {
  let result = []
  for (i = 0; i < a.length; i++) {
    if (!(b.includes(a[i]))) {
      result.push(a[i])
    }
  }
  return result
}