const net = require("net");

const server = net.createServer((socket) => {
  socket.write("Connected successfully! Try writing something: ");
  socket.on("data", (data) => {
    console.log(data.toString());
  });
});

server.listen(8080);
