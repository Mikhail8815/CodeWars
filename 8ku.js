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