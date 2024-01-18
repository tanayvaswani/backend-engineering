const dgram = require("dgram");
const socket = dgram.createSocket("udp4"); //IPv4

socket.on("message", (message, rinfo) => {
  console.log(`Server got: ${message} | from ${rinfo.address}:${rinfo.port}`);
});

socket.bind(8081);
