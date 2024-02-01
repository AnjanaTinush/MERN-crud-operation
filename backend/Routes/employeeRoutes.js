const express = require("express")
const router = express.Router();
const Employee = require("../model/employee")

router.route('/addemployee').post(async(req,res)=>{

     const {name,email,rentperday,imageurl} = req.body;

     const newemployee = new Employee ({

      name,
      email,
      rentperday,
      imageurl
     })

    try {
      
      await newemployee.save();
       
      res.send("New Employee Added Successfully")
  
    } catch (error) {
      
      return res.status(400).json({error})
      
    }
  })


  router.get("/getallemployees",async(req,res) =>{

    try {
      const employees = await Employee.find()
      return res.json(employees);
    } catch (error) {
        return res.status(400).json({massage : error})
    }
});

module.exports=router;
