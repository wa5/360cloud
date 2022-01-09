const addUID=<T>(obj:T)=>{

    let uid=Math.floor(Math.random()*100)

    return {...obj,uid}
}

function add5(a:number,b:number,c:number=8){

}
add5(3,5)



var once=addUID({name:'khusbu',breakfast:'chapati'})
var once1=addUID(3)
console.log(once.uid)
console.log(once.name)
console.log(once.breakfast)
