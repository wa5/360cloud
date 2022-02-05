const mongoose=require('mongoose')
var url="mongodb://127.0.0.1:27017/360cloud2"
mongoose.connect(url,(err)=>{
    if(err)throw err;
    console.log("db connected")
})