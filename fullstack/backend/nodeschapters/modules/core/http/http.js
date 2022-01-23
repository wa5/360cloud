var http=require('http')
var url=require('url')
http.createServer((req,res)=>{
 if(req.url=='/home'){
    res.write("<h1>im home</h1>")
    res.end()
 }else if(req.url=='/about'){
    res.write("<h1>im abou1t</h1>")
    res.end()
 }else if(req.url=='/contact'){
    res.write("<h1>im about</h1>")
    res.end()
 }
    
}).listen(8080,()=>{
    console.log("im working 8080")
})
