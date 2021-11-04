// Modules
const {connect} = require('./client');
const net = require("net");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function () {
  stdin.on("data", handleUserInput);
};

setupInput();
console.log("Connecting ...");
connect();