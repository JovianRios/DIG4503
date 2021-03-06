const Jovian = require("./Jovian.js");
const Colors = require("./Jovian.js");
const Student = require("./Jovian.js");
const Enjoy = require("./Jovian.js");


const header = require("./header.js");


let j = new Jovian ("My name is Jovian,", [

    "#04C6FF",
  
]);

j.speak();

let s = new Student ("I am a student at UCF", [

    "#5E6472",  
 
]);

s.speak();

let c = new Colors ("and these are my favorite colors.", [

    "#F54900",
    
]);

c.speak();

let e = new Enjoy ("I hope you enjoyed!", [

    "FF8D5C",

]);

e.speak();