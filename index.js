import express from "express";
import chalk from 'chalk';

const App = express();
const port = 45030;
const log = console.log;

// Text in terminal will appear in blue once server is running
log(chalk.blue("*OPEN PORT 45030 IN ANY BROWSER TO SEARCH*"));

// Names of people to search
const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela',
    'Jovian',
    'Jose',
    'Rudy'
];

// Numbers to choose from 1-15
const number = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',	
    '7',	
    '8',	
    '9',	
    '10',
    '11',	
    '12',	
    '13',	
    '14',	
    '15'
];

// Colors to search for from Blue to Brown
const color = [
    'Blue',
    'Yellow',
    'Orange',
    'Green',
    'Black',
    'Gray',
    'Pink',
    'Purple',
    'Red',
    'Brown'
]

// Static Files
App.use(express.static('public'));

// Home page
App.get('/', function (_req, res) {
    //Sends a response
    res.send("<h1>This is the Home Page!</h1>");
});


// Type a name, if it is found it will show the name (Name is case sensitive)
App.get('/people/:person', (req, res) => {
    let person = req.params.person;
    if (names.includes(person)){
        res.json({name: person});
    } else {
        res.json({name: "not found"});
    }
});

// Search for a letter and if found you will be given names or a name (this is case sensitive)
App.get('/search/:name', (req, res) => {
    const people = names.filter(str => str.includes(req.params.name));

if (people !=0) {
    res.json({search: [people]});
} else {
    res.json({search: "not found"});
}

});

// Pick a random number between 1 and 15
App.get('/number/:numbers', (req, res) => {
    let numbers = req.params.numbers;
    if (number.includes(numbers)){
        res.json({number: numbers});
    } else {
        res.json({number: "not found"});
    }
});

// Pick a color and check if it is found (Case sensitive as well)
App.get('/color/:colors', (req, res) => {
    let colors = req.params.colors;
    if (color.includes(colors)){
        res.json({color: colors});
    } else {
        res.json({color: "not found"});
    }
});

/* If what is typed after "http://localhost:45030/.." in the URL does not match 
any of the routes above then "Page not found!"" will appear on the screen */
App.get("*", (_req, res) => {
    res.json("Page not found!")
});

// Listening on port 45030
App.listen(port, () => {
    
});