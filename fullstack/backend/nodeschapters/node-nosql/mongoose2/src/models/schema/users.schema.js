require('../../../config/db.config')
var mongoose=require('mongoose')
var {Schema}=mongoose

var userStructure=new Schema({
    name:String,
    age:Number,
    chocalate:String
})

module.exports=mongoose.model('users',userStructure)

// class Humans{
//     constructor({eyes,ers}){
//         this.eyes
//         this.ers
//     }
// }

// var jiju=new Humans({})