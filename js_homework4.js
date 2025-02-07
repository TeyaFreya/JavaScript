

function randomnumbers(count) {
    let num;
    let evennum = 0;
    let oddnum = 0;
    for (let i = 0; i < count; i++) {
        num = (Math.round(Math.random() * 900) + 100);
        // console.log(num);

        if (num % 2 == 0) {
            evennum++;
        }
        else {
            oddnum++
        }
    
    }
    console.log(count) 
    console.log(`парні: ${evennum}`) 
    console.log(`непарні: ${oddnum}`)
    console.log("парні " + (evennum / count) * 100 + "%") 
    console.log("непарні " + (oddnum / count) * 100 + "%")
}

randomnumbers(50);












