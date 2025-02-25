//У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

//За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

//одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.


let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];


const goodemail = arr.map((user) => user.email);
const goodemail2 = goodemail.filter(email => email.match(/@(gmail\.com|yahoo\.com)$/));

console.log(goodemail2)