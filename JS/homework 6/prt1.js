let num1 = prompt('введите число')

function answr(numx){
    let answ = (numx % 2)

if (answ == 0){
 alert("число чётное")
}
 if (answ == 1){
    alert("число не чётное")
}
}

answr(num1)