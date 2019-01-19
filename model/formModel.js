const connection = require('../database/database');

module.exports = (name, title, body) => {
    const query = 'insert into form_content set ?';
    connection.query(query, { name: name, title: title, body: body }, (err, rows) => {
        if (err) throw new Error('データの登録に失敗しました');
    });
}