let name, age, city, phone, email, company;
name = prompt("Ваше имя");
age = prompt("Возраст");
city = prompt("Город");
phone = prompt("Телефон");
email = prompt("Email");
company = prompt("Компания");

console.log("--- Задание 1 ---");
console.log("Меня зовут " + name + ". Мне " + age + " лет. Я порживаю в городе " + city + " и работаю в компании " + company + ". Мои контактные данные: " + phone + ", " + email + ".");

console.log("\n--- Задание 2 ---");
let year = 2021 - age;
console.log(name + " родился в " + year + " году.");

// console.log("\n--- Задание 3 ---");
// let _number = 153450;
// let _n1 = parseInt(_number / 100000)*100000;
// let _n2 = parseInt(_number / 10000)*10000;
// let _n3 = parseInt(_number / 1000)*1000;
// let _n4 = parseInt(_number / 100)*100;
// let _n5 = parseInt(_number / 10)*10;
// let _n6 = parseInt(_number);
// let left = (_n1 + _n2 + _n3);
// let right = (_n4 + _n5 + _n6);
// console.log(left, right);
// console.log(left === right ? "да" : "нет");


console.log("\n--- Задание 4 ---");
let a = 1;
console.log(a > 0 ? "Верно" : "Неверно");
a = 0;
console.log(a > 0 ? "Верно" : "Неверно");
a = -3;
console.log(a > 0 ? "Верно" : "Неверно");

console.log("\n--- Задание 5 ---");
let a5 = 10,
    b5 = 2,
    sum = a5 + b5;
console.log(sum);
console.log(a5 - b5);
console.log(a5 * b5);
console.log(a5 / b5);
if (sum > 1) console.log(sum **2);

console.log("\n--- Задание 6 ---");
if ((a5 > 2 && a5 < 11) || (b5 >= 6 && b5 < 14)) console.log("Верно")
else console.log("Неверно");

console.log("\n--- Задание 7 ---");
let n = 16,
    text;
if (n >= 0 && n <= 59){
    if (n <= 15) text = "Первая четверть";
    else if (n > 15 && n <= 30) text = "Вторая четверть";
    else if (n > 30 && n <= 45) text = "Третяя четверть";
    else text = "Четвертая четверть";
        console.log(text);
}

console.log("\n--- Задание 8 ---");
let date = 25,
    text8;
if (date > 0 && date <=31){
    if (date <=10) text8 = "Первая декада";
    else if (date >10 && date <= 20) text8 = "Вторая декада";
    else text8 = "Третья декада";
    console.log(text8);
}

console.log("\n--- Задание 9 ---");
let day = 251,
    year9,
    month,
    week,
    hour,
    minute,
    second;
year9 = day / 365;
month = day / 31;
week = day / 7;
hour = day * 24;
minute = hour * 60;
second = minute * 60;
console.log(year9 < 1 ? "Меньше года" : year9);
console.log(month < 1 ? "Меньше иесяца" : month);
console.log(week < 1 ? "Меньше недели" : week);
console.log(hour);
console.log( minute);
console.log( second);

console.log("\n--- Задание 10 ---");
let month10,
    season;
if (day > 0 && day <= 366){
    if (day <= 31) month10 = 1;
    else if (day <= 59) month10 = 2;
    else if (day <= 90) month10 = 3;
    else if (day <= 120) month10 = 4;
    else if (day <= 151) month10 = 5;
    else if (day <= 181) month10 = 6;
    else if (day <= 212) month10 = 7;
    else if (day <= 243) month10 = 8;
    else if (day <= 273) month10 = 9;
    else if (day <= 304) month10 = 10;
    else if (day <= 334) month10 = 11;
    else month10 = 12;
    switch (month10){
        case 1:
        case 2:
        case 12:
            season = "зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "вепсна";
            break;
        case 6:
        case 7:
        case 8:
            season = "лето";
            break;
        case 9:
        case 10:
        case 11:
            season = "осень";
            break;
    }
    console.log("месяц - " + month10 + "\nпора года - " + season);
}


/*
3. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.


10. Напишите скрипт, который по введенному дню (исп. значение переменной из 8
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
т.д.). Скрипт определение поры года написать через switch.
    Для вывода результатов скриптов вы можете использовать функции: alert() для вывода
    всплывающего окна; console.log() для вывода в консоль браузера; document.write() для вывода
    в «тело» HTML-документа.*/