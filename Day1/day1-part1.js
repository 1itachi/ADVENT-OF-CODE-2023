// The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. 
// On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.
// For example:

// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet
// 12, 38, 15, and 77. Adding these together produces 142.
const fs = require('fs');

const filePath = 'puzzleInput.txt';

function day1(inputArray) {
    var sum = 0;

    for (var i = 0; i < inputArray.length; i++) {
        sum = sum + getFirstAndLastDigit(inputArray[i])

    }
    return sum;
}

function getFirstAndLastDigit(inputString) {

    allNumbers = inputString.match(/\d/g);
    if (allNumbers == null) return 0;
    
    if(allNumbers.length>1){
        
        combine= allNumbers[0]+allNumbers[allNumbers.length-1];
        return parseInt(combine);
    }

   return parseInt(allNumbers[0]+allNumbers[0]);

}    

function test(){
    console.log(day1(['1abc2','pqr3stu8vwx','a1b2c3d4e5f','treb7uchet', 'bob'])) //142
    console.log(day1(['1abc23','pqr32stu8vwx','a1b213d4e5f','treb7uchet', 'bob', '3'])) //161
    console.log(day1(['','1234', 'bob', '3', '11111111', '1b2b3b4n45n5'])) //55


    //actual test data
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        const linesArray = data.split('\n').map(line => line.trim());
      
        // Display the array of lines without newline characters
        console.log(linesArray.length);
        console.log(day1(linesArray)) 
      });
}

// test();

module.exports = { day1 };