var url=require('url')
//console.log(url)

var myurl="http://localhost:8080/contat?name=khusbu&age=55&class=mern"
var qu=url.parse(myurl,true)
console.log(qu.host)
console.log(qu.pathname)

var mydata=qu.query
console.log(mydata.name)