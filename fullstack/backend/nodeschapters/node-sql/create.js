let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});
con.connect((err) => {
  if (err) throw err;
  console.log("db connected");
  con.query("CREATE DATABASE 360cloud2", (err, res) => {
    if (err) throw err;
    console.log("db created");
  });
});
