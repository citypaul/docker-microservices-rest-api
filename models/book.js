const Sequelize = require('sequelize');
const sequelize = new Sequelize('books', 'root', 'my-secret-pw', {
    host: 'books-database',
    dialect: 'mysql',
    port: '3306'
});

var Book = sequelize.define('book', {
  title: Sequelize.STRING,
  isbn: Sequelize.STRING,
  description: Sequelize.STRING
});

module.exports = Book;