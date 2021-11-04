// Modules
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "192.168.50.90",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log ("Your snek has connected");
    setTimeout(() => {
      conn.write("Name: SNK");
    }, 1000);

  });

  // TEST CODE
  // conn.on("connect", () => {
  //   console.log ("Your snek has connected");
  //   setTimeout(() => {
  //     conn.write("Name: SNK");
  //   }, 1000);
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 1500);
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 1550);
  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 1600);
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 1650);
  // });



  return conn;
};

module.exports = {connect};