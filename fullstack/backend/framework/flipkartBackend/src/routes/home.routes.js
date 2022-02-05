const express = require("express");
const Router = express.Router();
const { getHome,
    putHome,
    postHome,
    deleteHome,}=require('../controller/home.Ctrl')


Router.route("/home")
  .get(getHome)
  .post(postHome)
  .delete(deleteHome)
  .put(putHome);

module.exports = Router;
