var express = require('express');

var app = express();
var port = 2000;

var person = [{
    rout: 'mo',
    name: 'mona',
    age: '35',
    title: 'Bussinees Woman'
}, {
    rout: 'sa',
    name: 'saba',
    age: '30',
    title: 'Engineer'
},
{
    rout: 'si',
    name: 'sina',
    age: '40',
    title: 'Bussinees man'
}];

app.get('/', (req, res) => {
    res.send("Heloo there! Your exress looks good!")
});

app.get('/person', (req, res) => {
    res.json(person)
});

app.get('/person/:chosenPerson', (req, res) => {
    var chosenPerson = req.params.chosenPerson;
    console.log(chosenPerson);

    for (var i = 0; i < person.length; i++) {
        if (chosenPerson === person[i].rout) {
            return res.json(person[i]);
        }
    }
    return res.status(404).send('No Charactore found!');
})

app.listen(port, () => {
    console.log(`I am listening on port, ${port}`)
})