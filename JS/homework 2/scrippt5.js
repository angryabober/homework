let student = prompt('вы студент? (1-да/2-нет)')
let job = prompt('вы работаете? (1-да/2-нет)')

if (student == 1 && job == 1){
    alert('вы студент и вы работаете');
}

if (student == 1 && job == 2){
    alert('вы студент');
}

if (student == 2 && job == 1){
    alert('вы работаете');
}