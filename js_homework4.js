

function randomnumbers(count) {
    let num;
    let evennum = 0;
    let oddnum = 0;
    for (let i = 0; i < count; i++) {
        num = (Math.round(Math.random() * 900) + 100);
        console.log(num);

        if (num % 2 == 0) {
            evennum++;
        }
        else {
            oddnum++
        }
    
    }
    console.log(`парні: ${evennum}`) 
    console.log(`непарні: ${oddnum}`)
    
    // Тільки так придумала))) знаю, що не то, але ідей нема)))

    console.log("парні " + (evennum / 10) * 100 + "%") // evennum ділимо на кількість виведених чисел і множимо на 100%
    console.log("непарні " + (oddnum / 10) * 100 + "%")
}

randomnumbers(10);












