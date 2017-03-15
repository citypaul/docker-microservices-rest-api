const restify = require('restify');
const Book = require('./models/book');
console.log('sfhsifuhds!');
function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

const server = restify.createServer();
server.get('/book/', (req, res, next) => {
    Book.findAll().then((result) => {
       res.send(result);
    });
});

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
