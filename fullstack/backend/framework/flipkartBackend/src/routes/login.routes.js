const express=require('express')
const Router=express.Router()
const {
    deleteLogin,
    postLogin,
    putLogin,
    getLogin,
  } =require("../controller/login.Ctrl");


Router.route("/login")
.get( getLogin)
.post( postLogin)
.delete( deleteLogin)
.put( putLogin);


module.exports=Router