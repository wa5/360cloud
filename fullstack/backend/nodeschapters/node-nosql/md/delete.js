const mongodb=require('mongodb').MongoClient

var url="mongodb://127.0.0.1:27017/";
mongodb.connect(url,(err,db)=>{
    if(err)throw err;
    console.log("db conected")
let dbo=db.db("360cloud2")

var myobj={name:'jiju'}

//finding all the values
dbo.collection('students').deleteOne(myobj,(err,res)=>{
    if(err)throw err
    console.log("deleted")
    db.close()
})


})




 
