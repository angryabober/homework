let num1 = Number(prompt('1'));
let znak = prompt('знак числа');
let num2 = Number(prompt('2'));
switch (znak) {
    case '+':
        alert(num1 + num2);
        break;
    case '-':
        alert(num1 - num2);
        break;
    case '*':
        alert(num1 * num2);
        break;
    case '/':
        alert (num1 / num2);
        break;
}