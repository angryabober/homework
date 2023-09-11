let a = prompt('число 1')
let b = prompt('число 2')

function callback(y){
    y();
}
function calc(a,b){
    alert(a*b);
}
calc(a,b);