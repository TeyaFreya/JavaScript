
// Новий варіант, але у мене вийшло тільки якщо в обєкті числа, а не string.
// Не розумію як їх перевести в числа
// Я нагуглила як за допомогою фільтру, відфільтрувати з масиву метод, який туда фігачиться якщо використовуєш Object.values
// Ну і вийшло щось таке))) але воно хоча б працює, навіть якщо додати щось в обєкт з числами)
// Не іделаьно)) але в мене вже мозок кипить)

const services = {
  haircut: 60,
  shaving: 80,
  washing: 100,

  price() {

    const num = (Object.values(services));
    const result = num.filter(Number.isFinite)
    let sum = result;
    function sumnum(number) {
      let sum1 = 0
      for (let i = 0; i < number.length; i++) {
        sum1 += number[i];
      }
      console.log(sum1)
    }
    sumnum(sum)
  },
  
     
  minPrice() {

    const num = (Object.values(services));
    const result = num.filter(Number.isFinite)
    const array = result;
    const minElement = Math.min(...array);
    console.log(minElement);
  },

  maxPrice() {

    const num = (Object.values(services));
    const result = num.filter(Number.isFinite)
    const array = result;
    const maxElement = Math.max(...array);
    console.log(maxElement);
  }

}

services.price();
services.minPrice();
services.maxPrice();

















// const services = {
// "стрижка": "60 грн",
// "гоління": "80 грн",
// "Миття голови": "100 грн",

//     price() {

//         const { стрижка, гоління, "Миття голови": миттяГолови } = services;
//         console.log("--------------------------------")
// console.log("Сума послуг")
// console.log((Number.parseInt(стрижка) + Number.parseInt(гоління) + Number.parseInt(миттяГолови)) + " грн")   
//     },
    
//  minPrice() {

//      const { стрижка, гоління, "Миття голови": миттяГолови } = services;

//      console.log("--------------------------------")
//       console.log("Мінімальна ціна")
//     console.log((Number.parseInt(стрижка) || Number.parseInt(гоління) || Number.parseInt(миттяГолови)) + " грн")   
    

// },
//   maxPrice() {
 
//      const { стрижка, гоління, "Миття голови": миттяГолови } = services;

//      console.log("--------------------------------")
//       console.log("Максимальна ціна")
//     console.log((Number.parseInt(стрижка) && Number.parseInt(гоління) && Number.parseInt(миттяГолови)) + " грн") 
// }
// };
  

// services.price();
// services.minPrice();
// services.maxPrice();


