const getHome = (req, res) => {
  res.render("home", { name: "jiju" });
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
