const GBMB = 1024;
let flashka = Number(prompt('объём флэшки в ГБ'));
let size = (flashka * 1000 / GBMB);
if (size < 0) {
    alert('не хватает места');
}
else {
    alert('на флэшку поместится ' + size + ' файлов объмом 820 МБ');
}