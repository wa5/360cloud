var { Users } = require('../models');
 const savinguSerData=(name,email,password)=>{
    var user1=new Users({name:name,email:email,password:password})
    user1.save()
}

const gettingUserData=(name)=>{
  var res2=Users.findOne({name:name},(err,res)=>{
    if(err)throw err;
    console.log("t",res)
    return res
})
return res2
}


module.exports={savinguSerData,gettingUserData}