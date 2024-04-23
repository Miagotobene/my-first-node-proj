console.log('intro to node and express');
// Imports: approach 1
const utils = require('./utils');
console.log(utils.add(5,3));
console.log(utils.multiply(5,3));


// imports: approach 2
const {add, subtract, divide, multiply} = require('./utils');

console.log(add(2,3));
console.log(multiply(5,3));  

const fs = require('fs');

// use fs module
fs.readFile('story.txt', 'utf8', function(error,data){
    if (error){
        console.log('There is a problem reading the data');
    }
    else{
        console.log(data);
    }

})

// write to the story.text file

let data = "Before the story ends, the narrator reveals the plot.";

fs.writeFile('story.txt', data, function(error,data){
    if (error){
        console.log('There is a problem reading the data');
    }
    else{
        console.log(data);
    }

})

let newData = "A beautiful princess lived in a castle.";
fs.appendFile('story.text', newData, function(error){
    if (error){
        console.log('There is a problem reading the data');
    }
    else {
    }

});
fs.readFile('story.text', 'utf8', function(error, data){
    if (error){
        console.log('There is a problem reading the data');
    } else{
        console.log(data);
    }

});


