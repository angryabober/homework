let min = 0;
let max = 3;
let num = Math.floor(Math.random() * (max - min + 1)) + min;
let answr = prompt('введите число');
if (answr == num) {
    alert('вы угадали');
}
else{
    ('попробуйте ещё');
}