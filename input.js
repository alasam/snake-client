let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;

  return stdin;

};

const handleUserInput = function (key) {

  if (key === "w") {
    connection.write("Move: up");
    console.log("up");
  }
  if (key === "s") {
    connection.write("Move: down");
    console.log("down");
  } 
  if (key === "d") {
    connection.write("Move: right");
    console.log("right");
  }
  if (key === "a") {
    connection.write("Move: left");
    console.log("left");
  }
  if (key === " ") {
    connection.write("Say: hehe...'space' out");
  }

};

module.exports = { setupInput } 