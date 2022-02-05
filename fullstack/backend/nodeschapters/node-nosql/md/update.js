const mongodb=require('mongodb').MongoClient

var url="mongodb://127.0.0.1:27017/";
mongodb.connect(url,(err,db)=>{
    if(err)throw err;
    console.log("db conected")
let dbo=db.db("360cloud2")

let myobj={name:"jiju",class:"mern stack",chocalate:"kitkat"}
let newvalue={$set:{chocalate:"dairymilk"}}


dbo.collection('students').findOneAndUpdate(myobj,newvalue,(err,res)=>{
    if(err)throw err;
    console.log("updated")
    db.close()
})



})
 
