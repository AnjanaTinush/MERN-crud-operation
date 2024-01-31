const mongoose = require("mongoose");

const employeeScheama=mongoose.Schema({

    name : {
        type : String,
        require : true
    },

    email : {

        type : String,
        require :true
    },

    rentperday : {
         
        type : Number,
        require :true
    },
    
    imageurl : [],
   


} , {
     timestamps :true,
})

const employeeModel =mongoose.model('employees',employeeScheama)

module.exports=employeeModel  
