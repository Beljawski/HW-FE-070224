// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// function checkNumber (number1, number2){
//     if (number1<number2) {console.log(number1)
    
// } else {console.log(number2)    
// } 
// }
// checkNumber (1,2)


// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function checkNumber (number1, number2){
//     const maxNumber = Math.max(number1,number2)
//     const minNumber = Math.min(number1,number2)

//     for (let i = maxNumber; i >= minNumber; i--) {
//         if (i%2 ===0) {
//             console.log(i);
//         }
        
//     }}
// checkNumber (1,6) 



// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

// function power (number1,number2=2) {
//     console.log(number1**number2);
// }
// power (5)

// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function numbers(n) {
// let sum = 0
//     for (let i = 1; i <=n; i++) {
//         sum =sum + i;
        
//     }console.log(sum);
// }
// numbers(10)

// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).


// function numbers(n, m) {
//     let sumOdd = 0
//     let sumEven = 0
//     if (n>m) {
//         [n, m]=[m, n]
//     }
//     for (let i = n; i <=m; i++)
//     if (i%2===0) 
//         {sumEven = sumEven +i}  
//     else {
//         sumOdd = sumOdd +i;
//         }
    
//     console.log(sumOdd);
//     console.log(sumEven);
// }
// numbers(5,10)

// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 

// function checkTextLentgh(text) { 
//     if(text.length === 0)  { 
//         return null
//     }
// let lengthstWord = arr[0]
//     for (let i = 1; i < text.length; i++) {
//        if (text[i].length > lengthstWord.length) {
//         lengthstWord = text[i]
//        }
        
// } return lengthstWord
// }

// ????
