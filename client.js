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
  });

  conn.on("connect", () => {
    console.log ("Your snek has connected");
    conn.write ("Name: SNK");
  });



  return conn;
};

module.exports = {connect};