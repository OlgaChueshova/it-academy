const fam = prompt('Введите Вашу фамилию', 'Иванов');
const name = prompt('Введите Ваше имя', 'Иван');
const patr = prompt('Введите Ваше отчество', 'Иванович');
let age = prompt('Сколько Вам лет?');

let numAge = Number(age);

let gender = confirm('Ваш пол мужской?');

if (gender) {
    gender = "мужской";
}
else {
    gender = "женский";
}

if (numAge >= 65 && gender == 'мужской') {
    pens = "да";
}
else if (numAge >= 55 && gender == 'женский') {
    pens = "да";
}

else {
    pens = "нет";
}

function sum(a, b) {
    return a + b;
}

let days = sum(numAge, 5);


alert('Ваше ФИО: ' + fam + ' ' + name + ' ' + patr + ' \n' + 'Ваш возраст в годах: ' + numAge + ' \n' + 'Ваш возраст в днях: ' + numAge * 365 + '\n' + 'Через 5 лет Вам будет: ' + days + '\n' + 'Ваш пол: ' + gender + '\n' + 'Вы на пенсии: ' + pens);