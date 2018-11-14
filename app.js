let fs = require('fs')
let _ = require('underscore');

// read the file with async function
fs.readFile('./flower.txt', (err, data) => {
    //if there is an error return
    if (err) return;
    processFile(data.toString());
})


function processFile(data) {
    // split the buffer at the ned of the line
    let sData = data.split('\n')
    // count the number of the rows
    let size = _.size(sData)
    console.log('The size of the file is ' + size + ' rows')
    console.log("");
    // list all flowers that starts with S Letter
    let startsWithS = sData.filter((flower) => flower.startsWith("S"));
    console.log("The flowers that starts with S is: " + "\n" + startsWithS);
    console.log("");
    // list all flowers that not starts with S Letter
    let nStartsWithS = _.without(sData, startsWithS)
    console.log("The flowers that not starts with S is: " + "\n" + nStartsWithS);
    console.log("");
    // list all flowers that starts with S Letter
    let startsWithM = sData.filter((flower) => flower.startsWith("M"));
    console.log("The flowers that starts with M is: " + "\n" + startsWithM);
    console.log("");
    // list all the flower name length is 5
    let length = sData.filter((flower) => flower.length == 5)
    console.log("the flower name that length is 5 char is: " + "\n" + length)

}

