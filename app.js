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
    // list all flowers that starts with S Letter
    let startsWithS = sData.filter((flower) => flower.startsWith("S"));
    console.log("the flowers that starts with S is: " + "\n" + startsWithS);
    // list all flowers that not starts with S Letter
    let nStartsWithS = _.without(sData, startsWithS)
    console.log("the flowers that not starts with S is: " + "\n" + nStartsWithS);
    // list all flowers that starts with S Letter
    let startsWithM = sData.filter((flower) => flower.startsWith("M"));
    console.log("the flowers that starts with M is: " + "\n" + startsWithM);

    // let length = _.map(sData, function(flower){ return flower.length == 5; });
    // console.log("the flower name that length is 5 char is: "+ length)

}

