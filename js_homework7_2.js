//Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, які не містять літери «А» (великої або малої)

let sent = "Mary had a little lamb";
const pattern = /[^aA]{6,}/g;
const result = sent.match(pattern);
console.log(result);