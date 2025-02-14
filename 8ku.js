// Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своих местах. 
// Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает присутствие).
// Например,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// Правильный ответ будет таким 17.

// Подсказка: не забудьте проверить наличие неверных значений, таких как null/undefined
sheeps = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

function countSheeps(sheep) {
    let sheepCount = 0
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] !==undefined&& sheep[i] !==null && sheep[i] === true) {
            sheepCount = sheepCount + 1
        }
    }
    return sheepCount
  }

  console.log(countSheeps(sheeps))

  //-----------------------------------------------------------------------------------------//

   //Ваша задача — создать функцию, которая выполняет четыре основные математические операции.
   //Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
   //Функция должна возвращать результат чисел после применения выбранной операции.

   // Примеры(Оператор, значение1, значение2) --> вывод
    //    ('+', 4, 7) --> 11
    //    ('-', 15, 18) --> -3
    //    ('*', 5, 5) --> 25
    //    ('/', 49, 7) --> 7

  function basicOp(operation, value1, value2){
       switch (operation) {
        case '+':
         return value1+value2
        case '-':
         return value1-value2
        case '*':
         return value1*value2
        case '/':
         return value1/value2
        default:
            break;
       }
  }

  console.log(basicOp('-', 3, 6))

    //-----------------------------------------------------------------------------------------//
     
   //     Описание
    // Нам нужна функция, которая может преобразовать строку в число. Какие способы достижения этого вы знаете?
    // Примечание: Не волнуйтесь, все входные данные будут строками, и каждая строка является совершенно допустимым представлением целого числа.

     // Примеры
        // "1234" --> 1234
        // "605"  --> 605
        // "1405" --> 1405
        // "-7" --> -7
    const stringToNumber = function(str){
        return +str;
      }

      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
    //   Напишите функцию для преобразования имени в инициалы. Эта ката строго принимает два слова с одним пробелом между ними.

    //   Вывод должен состоять из двух заглавных букв, разделенных точкой.
      
    //   Это должно выглядеть так:
      
    //   Sam Harris=>S.H
      
    //   patrick feeney=>P.F


      function abbrevName(name){
        const words = name.split(' ')
        const initials = words[0][0].toUpperCase() + "." + words[1][0].toUpperCase() 
        return initials
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

    // Первый век охватывает период с 1 по 100 год включительно , второй век — с 101 по 200 год включительно и т. д.

    // Задача
    // Если указан год, верните столетие, в котором он находится.
    // Примеры
    // 1705 --> 18
    // 1900 --> 19
    // 1601 --> 17
    // 2000 --> 20
    // 2742 --> 28

    function century(year) {
      return Math.ceil(year/100)
    }

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
    // Натан любит кататься на велосипеде.

    // Поскольку Натан знает, насколько важно поддерживать водный баланс, он выпивает 0,5 литра воды за час езды на велосипеде.
    
    // Вам дано время в часах, и вам нужно вернуть количество литров, которое выпьет Натан, округлив до наименьшего значения.
    
    // Например:
    
    // time = 3 ----> litres = 1
    
    // time = 6.7---> litres = 3
    
    // time = 11.8--> litres = 5

    function water(hours) {
      return Math.floor(hours*0.5)
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
          //     Преобразовать число в обратный массив цифр
          // Дано случайное неотрицательное число, необходимо вернуть цифры этого числа в массиве в обратном порядке.

          // Пример (Вход => Выход):
          // 35231 => [1,3,2,5,3]
          // 0 => [0]


    function digitize(n) {
      let result = []
      let num = n.toString()
      for (let i = num.length - 1; i >=0; i--) {
        result.push(+num[i]) 
      }  
      return result
    }

    digitize(0)

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // Создайте функцию, которая будет возвращать приветственное выражение, использующее входные данные; ваша программа должна возвращать "Hello, <name> how are you doing today?".

    function greet(name){
      return `Hello, ${name} how are you doing today?`
    }

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Тимми и Сара думают, что они влюблены, но в том месте, где они живут, они узнают об этом только тогда, когда каждый из них сорвет по цветку. 
    // Если у одного из цветков четное количество лепестков, а у другого — нечетное, это значит, что они влюблены.

    // Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать значение true, если они влюблены, и false, если нет.

    function lovefunc(flower1, flower2){
      if ((flower1%2 === 0 && flower2%2 === 0) ||(flower1%2 !== 0 && flower2%2 !== 0)) {
        return false
      } else {
        return true
      }
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
          
    // Сможете ли вы найти иголку в стоге сена?

    //   Напишите функцию findNeedle(), которая принимает arrayполный мусор, но содержит один"needle"

    //   После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), которое гласит:

    //   "found the needle at position "плюс indexон нашел иголку, так что:

    //   Пример (Вход -> Выход)

    //   ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 


    function findNeedle(haystack) {
      const index = haystack.indexOf('needle')
      return `found the needle at position ${index}`
      // your code here
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    // Создайте функцию, которая проверяет, nделится ли число на два числа x И. y Все входные данные — положительные, ненулевые числа.

    //     Examples:
    //     1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
    //     2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
    //     3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
    //     4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

    function isDivisible(n, x, y) {
      return n%x===0 && n%y===0 ? true : false
    }

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Дан массив целых чисел, вернуть новый массив, в котором каждое значение удвоено.

    // Например:
    
    // [1, 2, 3] --> [2, 4, 6]


    function maps(x){
       return x.map(el=>el*2)
    }

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        
    // Ваши одноклассники попросили вас скопировать для них некоторые документы. Вы знаете, что есть 'n' одноклассников и документы имеют 'm' страниц.

    // Ваша задача — подсчитать, сколько пустых страниц вам нужно. Если n < 0или m < 0вернуть 0.
    
    // Пример:
    // n= 5, m=5: 25
    // n=-5, m=5:  0


    function paperwork(n, m) {
      return (n<0 || m<0) ? 0: m*n
    }
    
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       
    // Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
    // Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
    
    // Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
    
    // name + " plays banjo" 
    // name + " does not play banjo"

    function areYouPlayingBanjo(name) {
      if (name[0].toUpperCase() === 'R') {
        return name + " plays banjo"
      } else {
        return name + " does not play banjo"
      }
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      
    // Реализуйте функцию, которая преобразует заданное логическое значение в его строковое представление.

    // Примечание: будут предоставлены только действительные данные.


    function booleanToString(b){
      return b.toString()
    }

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    // Напишите функцию, которая принимает массив чисел и возвращает сумму чисел. Числа могут быть отрицательными или нецелыми. Если массив не содержит чисел, то следует вернуть 0.

    //     Примеры
    //     Вход: [1, 5.2, 4, 0, -1]
    //     Выход:9.2

    //     Вход: []
    //     Выход:0
    
    
    function sum (numbers) {
      if (numbers.length === 0) {
        return 0
      } else {
        return numbers.reduce((result, number) => {
                 return result + number
        }, 0)
      }
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            
    // В вашем классе был тест, и вы его прошли. Поздравляем!

    // Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем среднестатистический ученик в вашем классе.
    
    // Вы получаете массив с результатами тестов ваших однокурсников. Теперь посчитайте средний балл и сравните свой!
    
    // Возвращайтесь, trueесли вам станет лучше, иначе false!

    function betterThanAverage(classPoints, yourPoints) {
      return classPoints.reduce((result, el)=>el + result, 0)/classPoints.length < yourPoints
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    
    