let answer;
let all = 0;
while (answer !== '0') {
    all = (Number(answer) + Number(all))
    answer = prompt('впишите другое число');
}
alert('вы вписали верное число');
alert(all);