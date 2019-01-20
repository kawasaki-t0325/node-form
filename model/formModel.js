const connection = require('../database/database');

const formInsert = (name, title, body) => {
    const query = 'insert into form_content set ?';
    connection.query(query, { name: name, title: title, body: body }, (err, rows) => {
        if (err) throw new Error('データの登録に失敗しました');
    });
};

const formRead = () => {
    const query = 'select * from form_content';
    connection.query(query, (err, rows) => {
        if (err) throw new Error('データの取得に失敗しました');
        console.log(rows);
    });
}

module.exports.formInsert = (name, title, body) => formInsert(name, title, body);
module.exports.formRead = () => formRead();