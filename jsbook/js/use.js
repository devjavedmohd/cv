"use strict";
/*var name = "John",
mood = "happy";

console.log("Hey " + name + ", are you feeling " + mood + " today?");*/

function getValue(condition){
    
    var value;
	if(condition){
		value = "blue";
		// other code 
        console.log(value);
		console.info(this);
		return value;
	} else {
		// value exists here with a value of undefined
		console.log(event);
        console.log(value);
		return null;
	}
	
	// value exists here with a value of undefined
}

var count = 300;
if(true){
    
let count = 400;
console.log(count);
    
}

console.log(count);


const maxItems = 404;
const maxs = 66;

console.log(maxs);
console.log(maxItems);


var lastones = 4000;
let newone = 30;
console.log(lastones);
console.log(newone);

const lastone = 333;
console.log(lastone);

var funcs = [];
for(var i = 0; i < 10; i++){
	funcs.push(function(){
		console.log(i);
	});
}

funcs.forEach(function(func){
    debugger;
	func();
});