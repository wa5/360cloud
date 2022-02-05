require('dotenv').config()
const express = require("express");
const app = express();
app.set('port',process.env.PORT||8002)

const path=require('path')
const ejs=require('ejs')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'src/views'))

app.use(express.static(path.join(__dirname,'src/public/img')))


app.get('/',(req,res)=>{
    res.render('login')
})
//importing api
const endPoint=require('./src/routes')
app.use('/api',endPoint.home)
app.use('/api',endPoint.login)
app.use('/api',endPoint.register)





//url rewiting
// app.get('/cars/:name/',(req,res)=>{
//     var name=req.params.name
//     res.send(`welcom to showring ${name}`)
//     })



//starting rem ending remmber betwwen forgot give *
// app.get('/ca*rs',(req,res)=>{
//     res.send('welcom to showring')
//     })


//+ one or more charecter
// app.get('/ca+rs',(req,res)=>{
//     res.send('welcom to showring')
//     })

//-?-zero or 1
// app.get('/ca?rs',(req,res)=>{
//     res.send('welcom to showring')
//     })



//multiple paths
// app.get('/cars/1',(req,res)=>{
// res.send('welcom to showring')
// })






app.listen(app.get('port'), () => {
  console.log(`server started on ${app.get('port')}`);
});
