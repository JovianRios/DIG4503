const chalk = require("chalk");
const beep = require("beepbeep");

class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    speak() {

        for(let i = 0; i < this.favoriteColor.length; i++) {
           
            console.log(chalk.bgHex(this.favoriteColor[i]).hex(this.name[i])(this.name));
            
            beep(5);
        }
    }
}

module.exports = Person;