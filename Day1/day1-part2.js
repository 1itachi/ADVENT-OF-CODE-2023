// Equipped with this new information, you now need to find the real first and last digit on each line. For example:

var day1 = require('./day1-part1.js');
const fs = require('fs');
const filePath = 'puzzleInput.txt';

// two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen
// In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

numbersDictinary = {
    "one": '1',
    "two": '2',
    "three": '3',
    "four": '4',
    "five": '5',
    "six": "6",
    "seven": '7',
    "eight": '8',
    "nine": '9',
    "ten": '10',
    "eleven": '11',
    "twelve": '12',
    "thirteen": '13',
    "fourteen": '14',
    "fifteen": '15',
    "sixteen": '16',
    "seventeen": '17',
    "eighteen": '18',
    "nineteen": '19',
    "twenty": '20',
    "thirty": '30',
    "forty": '40',
    "fifty": '50',
    "sixty": '60',
    "seventy": '70',
    "eighty": '80',
    "ninety": '90',
    "hundred": '100',
    "thousand":'1000'
}


function indentify(word){

    const charactersArray = word.split('');
    finalWord=''
    makeWord=''
    for(let i= 0; i<charactersArray.length; i++){
        current = charactersArray[i];
        if(!isNaN(parseInt(current, 10))){
            finalWord=finalWord+current;
            makeWord='';
        }else{
            makeWord=makeWord+current;
            result=checkIfKeyMatches(makeWord)
            if(result.found){
                finalWord=finalWord+result.key;
                makeWord='';
            }
        } 
    }
    return finalWord;
}

function checkIfKeyMatches(str){
    for(let key in numbersDictinary){
        if(str.includes(key)){
            return {found: true, key: numbersDictinary[key]};
        }
    }
    return {key: str, found: false};
}


function test2(){
    //actual test data
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
      
        const linesArray = data.split('\n').map(line => line.trim());
      
        for(let i=0; i<linesArray.length; i++){
            linesArray[i]=indentify(linesArray[i]);
        }


        for (const element of linesArray) {
            fs.appendFileSync("output.txt", element + '\n', 'utf-8');
          }
        // Display the array of lines without newline characters
        console.log(linesArray.length);
        // console.log(linesArray);
         console.log(day1.day1(linesArray)) 
      });

    // console.log(indentify('two1xdnine'));
    // console.log(indentify('eightfive4bldzgtpvslgkrmlmkftpone1'));

   
}

test2();

testdata = ["two1nine",
"eightwothree",
"abcone2threexyz",
"xtwone3four",
"4nineeightseven2",
"zoneight234",
"7pqrstfourteen"
]

for(let i=0; i<testdata.length; i++){
    testdata[i]=indentify(testdata[i]);
}
console.log(day1.day1(testdata)) 

console.log(indentify("2si6x2"))