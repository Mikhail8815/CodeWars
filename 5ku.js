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


//**************************************************/

// Функция rgb неполная. Дополните её так, чтобы передача десятичных значений RGB приводила к возврату шестнадцатеричного представления. Допустимые десятичные значения для RGB: от 0 до 255. Любые значения, выходящие за этот диапазон, необходимо округлить до ближайшего допустимого значения.

// Примечание: Ваш ответ всегда должен состоять из 6 символов, сокращение с 3 здесь не подойдет.

// Примеры (вход -> выход):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
  // Корректируем каждое значение отдельно
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // Преобразуем в HEX и добавляем ведущий ноль, если нужно
  const hexR = r.toString(16).padStart(2, '0').toUpperCase();
  const hexG = g.toString(16).padStart(2, '0').toUpperCase();
  const hexB = b.toString(16).padStart(2, '0').toUpperCase();

  // Возвращаем объединённую строку
  return hexR + hexG + hexB;
}

//**********************************************************/
// На этот раз мы хотим записать вычисления с использованием функций и получить результаты. Давайте рассмотрим несколько примеров:

// seven(times(five()));   //  must return 35
// four(plus(nine()));     //  must return 13
// eight(minus(three()));  //  must return 5
// six(dividedBy(two()));  //  must return 3
// Требования:

// Для каждого числа от 0 («ноль») до 9 («девять») должна быть функция.
// Должна быть функция для каждой из следующих математических операций: плюс, минус, умножить, разделить на
// Каждое вычисление состоит ровно из одной операции и двух чисел.
// Самая внешняя функция представляет левый операнд, самая внутренняя функция представляет правый операнд.
// Деление должно быть целочисленным . Например, это должно вернуть 2, а не 2.666666...:
// eight(dividedBy(three()));

function zero(operation) { return operation ? operation(0) : 0; }
function one(operation) { return operation ? operation(1) : 1; }
function two(operation) { return operation ? operation(2) : 2; }
function three(operation) { return operation ? operation(3) : 3; }
function four(operation) { return operation ? operation(4) : 4; }
function five(operation) { return operation ? operation(5) : 5; }
function six(operation) { return operation ? operation(6) : 6; }
function seven(operation) { return operation ? operation(7) : 7; }
function eight(operation) { return operation ? operation(8) : 8; }
function nine(operation) { return operation ? operation(9) : 9; }

function plus(rightOperand) { return leftOperand => leftOperand + rightOperand; }
function minus(rightOperand) { return leftOperand => leftOperand - rightOperand; }
function times(rightOperand) { return leftOperand => leftOperand * rightOperand; }
function dividedBy(rightOperand) { return leftOperand => Math.floor(leftOperand / rightOperand); }