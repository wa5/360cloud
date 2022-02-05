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

const q="DELETE FROM `students` WHERE id=2"
con.query(q, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
});
