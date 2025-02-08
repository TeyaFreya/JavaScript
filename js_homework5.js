const services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",

    price() {

        const { стрижка, гоління, "Миття голови": миттяГолови } = services;
        console.log("--------------------------------")
console.log("Сума послуг")
console.log((Number.parseInt(стрижка) + Number.parseInt(гоління) + Number.parseInt(миттяГолови)) + " грн")   
    },
    
 minPrice() {

     const { стрижка, гоління, "Миття голови": миттяГолови } = services;

     console.log("--------------------------------")
      console.log("Мінімальна ціна")
    console.log((Number.parseInt(стрижка) || Number.parseInt(гоління) || Number.parseInt(миттяГолови)) + " грн")   
    

},
  maxPrice() {
 
     const { стрижка, гоління, "Миття голови": миттяГолови } = services;

     console.log("--------------------------------")
      console.log("Максимальна ціна")
    console.log((Number.parseInt(стрижка) && Number.parseInt(гоління) && Number.parseInt(миттяГолови)) + " грн") 
}
};
  

services.price();
services.minPrice();
services.maxPrice();


