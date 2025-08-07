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

