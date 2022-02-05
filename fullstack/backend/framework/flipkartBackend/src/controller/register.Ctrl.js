const getRegister= (req, res) => {
    res.render('register',{name:'jiju'});
  }
const putRegister=(req, res) => {
    res.send("thank u for putting");
  }
const postRegister=(req, res) => {
    res.send("thank u for posting");
  }
const deleteRegister=(req, res) => {
    res.send("thank u for deleting");
  }


module.exports={

    getRegister,
    putRegister,
    postRegister,
    deleteRegister,
}