const fam = prompt('Введите Вашу фамилию', 'Иванов');
const name = prompt('Введите Ваше имя', 'Иван');
const patr = prompt('Введите Ваше отчество', 'Иванович');
const age = prompt('Сколько Вам лет?');

let gender = confirm('Ваш пол мужской?');
console.log(gender);

if (gender.confirm =true) {
    gender="мужской";}
else {
    gender="женский";
}

console.log(gender)

alert('Ваше ФИО:');