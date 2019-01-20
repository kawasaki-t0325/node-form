const model = require('../model/formModel');

module.exports = (name, title, body) => {
    model.formInsert(name, title, body);
    model.formRead();
}