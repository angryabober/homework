let money = prompt('сколько у вас денег ?');
let price = prompt('сколько стоит 1 шоколадка?');
money = Number(money);
price = Number(price);
let sell = money / price;
let bobr = money - price * sell;
if (sell < 1) {
    alert('нет денег')
}
else {
    alert('получите свои ' + sell + ' шоколадки,ваша сдача ' + bobr + ' рублей.');
}