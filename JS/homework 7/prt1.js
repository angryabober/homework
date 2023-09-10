function calc(callback){
let num1 = prompt('введите число 1');
let num2 = prompt('введите число 2');
let result = callback(num1,num2);
}

function umnozh(num1,num2) {
    return num1 * num2;
}
function del(num1,num2) {
    return num1 / num2;
}
function plus(num1,num2) {
    return num1 + num2;
}