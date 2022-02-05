let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"360cloud2"
});
con.connect((err) => {
  if (err) throw err;
  console.log("db connected");

 //const q="CREATE TABLE students(id Int(11),name VARCHAR(255),chocalate VARCHAR(255))"
const q="INSERT INTO `students`(`id`,`name`,`chocalate`) VALUES ('2','khusbu','kitkat')"

  con.query(q, (err, res) => {
    if (err) throw err;
    console.log("VALUE INSERTED");
  });
});
