let age = prompt('введите ваш возраст');
if (age < 3) {
    alert('вы ребёнок');
}
if (age > 12 && age < 18) {
    alert('вы подросток');
}
if (age > 18 && age < 60) {
    alert('вы взрослый');
}
if (age > 66) {
    alert('вы пенсионер');
}