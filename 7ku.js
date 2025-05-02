// Возвращает количество гласных в заданной строке.

// Мы будем считать a, e, i, o, uгласными для этого Ката (но не y).

// Входная строка будет состоять только из строчных букв и/или пробелов.

// function getCount(str) {
//     let count = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let i = 0; i<str.length; i++) {
//       if (vowels.includes(str[i].toLowerCase())) {
//         count++
//       }
//     }
//     return count;
//   }
  
//   console.log(getCount('mishaae'))



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Тролли атакуют ваш раздел комментариев!

// Распространенный способ решения этой проблемы — удалить все гласные из комментариев троллей, нейтрализовав угрозу.

// Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.

// Например, строка «Этот сайт для неудачников LOL!» превратится в «Ths wbst s fr lsrs LL!».

// Примечание: в данном случае ката yне считается гласной.



//1 вариант

// function disemvowel(str) {
//   const vowels = new Set('aeiou')
//   let result = ''
//   for (let char of str) {
//     if (!vowels.has(char.toLowerCase())) {
//        result += char
//     }
//   }
//   return result;
// }

// console.log(disemvowel("This website is for losers LOL!"))


//2 вариант

// function disemvowel(str) {
//   const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
//   return str.split('').filter((c) => {
//      return !vowels.has(c.toLowerCase())
//   }).join('')
// }

// console.log(disemvowel('hjaaaklluuu'))

//3 вариант

// function disemvowel(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   return str.split('').filter((c) => {
//      return !vowels.includes(c.toLowerCase())
//   }).join('')
// }

// console.log(disemvowel("This website is for losers LOL!"))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Добро пожаловать. В этом ката вам предлагается возвести в квадрат каждую цифру числа и сложить их.

// Например, если мы пропустим 9119 через функцию, то получим 811181, потому что 9 2 — это 81, а 1 2 — это 1. (81-1-1-81)

// Пример №2: Ввод 765 вернет/должен вернуть 493625, потому что 7 2 равно 49, 6 2 равно 36, а 5 2 равно 25. (49-36-25)

// Примечание: функция принимает целое число и возвращает целое число.

// Удачного кодирования!

function squareDigits(num){
    return +String(num).split('').map(el => Number(el)*Number(el)).map(String).reduce((akk, el) => akk + el, '');
  }

  console.log(squareDigits(234))


  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++