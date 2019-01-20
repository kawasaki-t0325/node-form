const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const controller = require('./controller/formController');

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    controller('name', 'title', 'body');
    res.render('./index');
});

app.post('/', (req, res) => {
    try {
        controller(req.body.name, req.body.title, req.body.body);
        res.render('./index');
    } catch (e) {
        alert(e);
        res.end();
    }
});

app.listen(3000);