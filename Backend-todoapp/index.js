const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(3003, () => {
   console.log('Servidor: http://localhost:3003/');
   console.log('Puerto: 3003');
})