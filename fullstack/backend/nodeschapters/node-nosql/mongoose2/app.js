require("./config/db.config");
var { Users } = require("./src/models");

// var user1=new Users({name:'jiju',age:"fgffg",chocalate:"kitkat"})
// user1.save()

// Users.findOneAndUpdate(
//   { age: 13 },
//   { chocalate: "dairymilk" },
//   { overwrite: false, new: true },
//   (err) => {
//     if (err) throw err;
//     console.log("updated");
//   }
// );


// Users.findOne({age:13},(err,res)=>{
//     if(err)throw err;
//     console.log(res)
// })


Users.findOneAndDelete({age:13},(err,res)=>{
    if(err)throw err;
    console.log(res)
})