const Person = require("./person.js");

class Jovian extends Person {
    constructor(name, colors, bgColors) {
        super(name, colors, bgColors);
    }
}

module.exports = Jovian;