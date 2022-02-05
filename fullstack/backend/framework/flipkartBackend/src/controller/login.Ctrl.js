const getLogin=(req, res) => {

console.log(req.query)

    res.render('login',{name:req.query.name,email:req.query.email,password:req.query.password});
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