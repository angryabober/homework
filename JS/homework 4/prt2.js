let answer;
let all = 0;
while (answer !== '0') {
    all = (all + answer)
    answer = prompt('впишите другое число');
}
alert('вы вписали верное число');
alert(all);