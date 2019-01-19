const connection = require('../database/database');

module.exports = (name, title, body) => {
    const query = 'INSERT INTO form_content (name, title, body) VALUES ("' + name + '", "' + title + '", "' + body + '")';
    connection.query(query, (err, rows) => {
        if (!err) console.log('ok');
        console.log(err);
    });
}