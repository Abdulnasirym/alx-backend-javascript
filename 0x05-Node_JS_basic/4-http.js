const { createServer } = require('node:http');

const app = createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' });

  res.end('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
