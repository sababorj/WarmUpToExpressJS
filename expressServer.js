var express = require('express');

var app = express();
var port = 2000;

var person = {
    name: 'saba',
    age: 'TBD',
    title: 'Engineer'
}

app.get('/', (req,res) => {
    res.send("Heloo there! Your exress looks good!")
});

app.get('/person', (req,res) => {
    res.json(person)
});

app.listen(port, () => {
    console.log(`I am listening on port, ${port}`)
})