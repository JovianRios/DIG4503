// variable = to axios module
const axios = require("axios");

// fetches the url 
axios('https://pokeapi.co/api/v2/pokemon/25')
    
    // .then creates a promise
    .then(function (response) {

            // this pulls data from the pokemon selected
            const ID25 = response.data;

            // prints out the pokemon ID, name, and weight if no errors are presented
            console.log("This Pokenon is under the ID of #" + ID25.id + " and is called " + ID25.name + " with a weight of " + ID25.weight + " pounds!");
    })

    // .catch picks up errors
    .catch(function (error) {
        
            // if there are errors they will be highlighted
            console.log("ERROR: " + error);
    });