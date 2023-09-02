let year = prompt('введите год');

function yearcount(yearx) {
if (((yearx % 4 == 0) && (yearx % 100 != 0)) || (yearx % 400 == 0)){
    alert('год високосный');
}
else{
    alert('год не является високосным');
}
}

yearcount(year)