const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const controller = require('./controller/formController');

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('./index');
});

app.post('/', (req, res) => {
    controller(req.body.name, req.body.title, req.body.body);
    res.end();
});

app.listen(3000);