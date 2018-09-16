"use strict";

x = 1; 
console.log("This should write '1': "+x);
var x; // Flytter deklarationen til toppen
 
console.log("This should write 'undefined': "+y);
var y = 5; // deklarationen til toppen men selve værdien bliver først sat her.
//hoisted()
hoisted(); 

function hoisted() {
  console.log('foo');
}

//notHoisted() // Fejl: notHoisted er ikke en funktion.

var notHoisted = function() {
   console.log('bar');
};

// ved strict skal variablerne oprettes før de tildelt værdier.

var a;
a = 1.14;
//Hvis "var b;" bliver kommenteret ud så ville linjen under give en fejl da b ikke er deklareret.
var b;  
b = 4*a; 
