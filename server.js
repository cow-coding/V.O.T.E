var express = require("express");
var mysql = require("mysql");
var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.static(__dirname + "/public"));

var conn = mysql.createConnection({
  host: "34.64.72.201",
  user: "root",
  password: "root",
  database: "election",
  multipleStatements: true,
  dialectOptions: {
    options: {
      rerquestTimeout: 3000,
    },
  },
});

conn.connect(function (err) {
  if (err) throw "There is no connection to the mysql server..." + err.message;
  console.info("Connected!");
});

exports.conn = conn;

var router = require("./router/main")(app, conn);

var server = app.listen(3000, function () {
  console.log("Express server has started on port 3000");
});
