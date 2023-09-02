let chars = "01234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
let length = prompt('задайте желаемую длину пароля');
let random = '';
for (let i=0; i<length; i++) {
    let rnum = Math.floor(Math.random() * chars.length);
    random += chars.substring(rnum,rnum+1);
}
alert(random)