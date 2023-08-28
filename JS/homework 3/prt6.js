let num = prompt('введите трёхзначное число');
let num1 = (num / 100);
let num2 = (num / 10)%10;
let num3 = (num % 10);
if(num1==num2 && num2==num3 && num1==num3) {
    alert('найдено совпадение');
}
else {
    alert('совпадений не найдено');
}