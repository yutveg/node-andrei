// starts on 0
// one character at a time
// no min or max floor

// Plan:
// utilize file system to access the parenthesis
// iterate through data with a for loop 
// for each character change floor number value
// once loop is done return the floor number value


// Plan part 2:
// utilize i + 1 to represent charPosition
// when floorNumber = -1 
// return the charPosition
// exit the loop

const fs = require('fs')

fs.readFile('./exercise.txt', (err, data) => {
    if (err) {
        console.log(err)
    } 

    const dataString = data.toString()
    let floorNumber = 0;

    for (let i = 0; i < dataString.length; i++){
        if (dataString[i] === '('){
            floorNumber += 1
        } 
        else if (dataString[i] === ')'){
            floorNumber -= 1
        }

        if(floorNumber === -1){
            console.log("Entered basement", i + 1)
            break
        }
    }

    console.log(floorNumber)
})
