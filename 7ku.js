// Возвращает количество гласных в заданной строке.

// Мы будем считать a, e, i, o, uгласными для этого Ката (но не y).

// Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount(str) {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i<str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++
      }
    }
    return count;
  }
  
  console.log(getCount('mishaae'))