import Express from "express";

const App = Express();
const port = 45030;

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
    'Marcela'
];

App.get('/people/:person', (req, res) => {
    let person = req.params.person;
    if (names.includes(person)){
        res.json({name: person});
    } else {
        res.json({name: "not found"});
    }
});

App.get('/search/:name', (req, res) => {
    const people = names.filter(str => str.includes(req.params.name));

if (people !=0) {
    res.json({search: [people]});
} else {
    res.json({search: "not found"});
}

})

App.listen(port, () => {

});