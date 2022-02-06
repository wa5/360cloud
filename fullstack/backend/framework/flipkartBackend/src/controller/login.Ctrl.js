var {savinguSerData,gettingUserData}=require('../services/uses.service')
var {sendmail}=require('../utility/sendingmail.utility')
const getLogin=async (req, res) => {

console.log(req.query)
var name=req.query.name;
var email=req.query.email
var password=req.query.password
savinguSerData(name,email,password)
sendmail(email)
    res.render('login',{name:name,email:email,password:password});
  }
const putLogin=(req, res) => {
    res.send("thank u for putting");
  }
const postLogin=(req, res) => {
    res.send("thank u for posting");
  }
const deleteLogin=(req, res) => {
    res.send("thank u for deleting");
  }


module.exports={

    deleteLogin,
    postLogin,
    putLogin,
    getLogin,
}