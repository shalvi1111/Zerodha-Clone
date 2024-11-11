const mongoose = require("mongoose") ;
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({

    email :{
        type : String ,
        required : [true , "You email is required"] ,
        unique : true
    } ,
    username : {
        type : String ,
        required : [true , "Your username is required"] ,
        unique : true 
    },

    password : {
        type : String ,
        required : true
    } ,

    createdAt : {
        type : Date ,
        default : new Date()
    } 
})

  UserSchema.pre("save" , async function () {
      this.password = await bcrypt.hash(this.password , 11)
  })
    
  module.exports = UserSchema;