let hour = prompt('введите час (от 0 до 24)');
function hourcount(hourx){
    if (hourx >=4 && hourx <= 11){
        alert('сейчас утро')
    }
    if (hourx >=12 && hourx <= 16){
        alert('сейчас день')
    }
    if (hourx >=17 && hourx <= 20){
        alert('сейчас вечер')
    }
    if (hourx >=21 || hourx <= 3){
        alert('сейчас ночь')
    }
}

hourcount(hour)