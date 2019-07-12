const express = require('express');
const bodyParser = require('body-parser');
const database = require('./Lib/Database.js');

const app = express();
const db = new database('sqlite.db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('static'));

app.post('/parrot', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.post('/addBookmark', (req, res) => {
    const { name, url } = req.body;
    db.add(name, url);
    console.log(req.body);
    res.json(req.body);
});

app.post('/deleteBookmark', (req, res) => {
    const { id } = req.body;
    db.delete(id);
    console.log(req.body);
    res.json(req.body);
})

app.post('/editBookmark', (req, res) => {
    const { id, name, url } = req.body;
    db.edit(id, name, url);
    console.log(req.body);
    res.json(req.body);
})

app.get('/getList', (req, res) => {
    db.getList().then((data) => {
        res.json(data);
    })
});

app.listen(3000);
