var {Users}=require('../models')

const getHome = (req, res) => {
  Users.findOne({name:req.params.name},(err,res)=>{
    if(err)throw err;
    console.log("t1",res)
  })
  res.render("home", { name:req.params.name });
};
const putHome = (req, res) => {
  res.send("thank u for putting");
};
const postHome = (req, res) => {
  res.send("thank u for posting");
};
const deleteHome = (req, res) => {
  res.send("thank u for deleting");
};

module.exports = {
  getHome,
  putHome,
  postHome,
  deleteHome,
};
