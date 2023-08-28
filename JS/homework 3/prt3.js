let num = prompt('введите трёхзначное число');
let a = Number(num % 10);
let b = Number((num - a) / 10 % 10);
let c = Number((num - a - b * 10) / 100);
alert('ваше число: ' + (a * 100 + b * 10 + c));