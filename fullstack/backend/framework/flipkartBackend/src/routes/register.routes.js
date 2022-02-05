const express = require("express");
const Router = express.Router();
const {
  getRegister,
  putRegister,
  postRegister,
  deleteRegister,
}= require ("../controller/register.Ctrl");

Router.route("/register")
  .get(getRegister)
  .post(postRegister)
  .delete(deleteRegister)
  .put(putRegister);

module.exports = Router;
