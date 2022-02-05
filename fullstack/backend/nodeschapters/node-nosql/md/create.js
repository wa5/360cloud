const mongodb=require('mongodb').MongoClient

var url="mongodb://127.0.0.1:27017/360cloud2";
export var con=mongodb.connect(url,(err,db)=>{
    if(err)throw err;
    console.log("db conected")
//let dbo=db.db("360cloud2")
// dbo.createCollection("students",(err,res)=>{
//     if(err)throw err
//     console.log("db created")
//     db.close()
//})
 
})