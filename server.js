const port = process.env.PORT || 9999;

const server = require('net').createServer(function (socket) {
  console.log('> Connect to this public endpoint with clientB:', socket.remoteAddress + ':' + socket.remotePort);
}).listen(port, function (err) {
  if(err) return console.log(err);
  console.log('> (server) listening on:', server.address().address + ':' + server.address().port)
});
