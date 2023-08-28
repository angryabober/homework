let year = prompt('введите год');
if (((year % 4 == 0) && (year % 100 != 0)) || (yer % 400 == 0)) {
    alert('год високосный');
}
else {
    alert('год не високосный');
}