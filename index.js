

let ss = require("simple-statistics");

let numbers = [ 62, 60, 53, 9, 11, 14, 15, 16, 17, 65, 88];


let foo = ss.max(numbers);
console.log(foo);

let fooo =ss.min(numbers);
console.log(fooo);

let fool = ss.sumSimple(numbers);
console.group(fool);

let foool = ss.mean(numbers);
console.log(foool);


// //The largest  number in the array  (use the max() function)
// let max = numbers[0];
// for (let i=0; i<numbers.length; i++) {
//     if (numbers[i]>= max) {
//         max = numbers[i];
//     }
// }
// console.log(max);

// //The smallest number in the array (use the min() function)
// let min = numbers[0];
// for (let i=0; i<numbers.length; i++) {
//     if (numbers[i]<= min) {
//         min = numbers[i];
//     }
// }
// console.log(min);

// //The sum of the numbers in the array (use the simpleSum() function)
// let sum = numbers[0];
// for (let i=0; i<numbers.length; i++) {
//         sum = sum + numbers[i];
// }
// console.log(sum);

// //The average (or mean) value in the array  (use the mean() function)
// let mean = numbers[0];
// for (let i=0; i<numbers.length; i++) {
//         mean = sum + numbers[i];
// }
// console.log(sum);





