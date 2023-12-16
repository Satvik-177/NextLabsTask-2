// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use('/api', router); // Use /api as a prefix for all routes

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
