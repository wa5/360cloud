const mongodb=require('mongodb').MongoClient

var url="mongodb://127.0.0.1:27017/";
mongodb.connect(url,(err,db)=>{
    if(err)throw err;
    console.log("db conected")
let dbo=db.db("360cloud2")

//finding one values
// dbo.collection('students').findOne({},(err,res)=>{
//     if(err)throw err;
//     console.log(res)
//     db.close()
// })

//finding all the values
dbo.collection('students').find({name:"khusbu"}).toArray((err,res)=>{
    if(err)throw err
    console.log(res)
    db.close();
})


})




 
