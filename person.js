const chalk = require("chalk");

class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    speak() {
        for(let i = 0; i < this.favoriteColor.length; i++) {
            console.log(chalk.hex(this.favoriteColor[i])(this.name));
        }
    }
}
module.exports = Person;
