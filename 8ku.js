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