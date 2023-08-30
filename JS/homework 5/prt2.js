let min = 0;
let max = 999;
for (let count = 10; count;){
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(num);
    count = count - 1;
}
console.log('всё')

// let min = 0;
// let max = 999;
// let count = 10;
// while (count){
//     let num = Math.floor(Math.random() * (max - min + 1)) + min;
//     console.log(num);
//     count = count - 1;
// }
// console.log('всё')