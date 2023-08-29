let min = 0;
let max = 100;
let num = Math.floor(Math.random() * (max - min + 1)) + min;
let answr = prompt('введите число');
answr = Number(answr)
if (num == answr) {
    alert('вы угадали');
}
else {
    alert('вы не угадали')
}