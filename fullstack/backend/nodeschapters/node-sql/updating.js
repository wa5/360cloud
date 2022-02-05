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

const q="UPDATE `students` SET `name`='priyanka',`chocalate`='dark' WHERE id=2"
  con.query(q, (err, res) => {
    if (err) throw err;
    console.log("updated values");
  });
});
