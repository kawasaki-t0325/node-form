const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('./index');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.end();
});

app.listen(3000);