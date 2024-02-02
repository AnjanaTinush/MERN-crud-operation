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


router.route('/updateemployee/:id').put(async(req, res) => {

  const employeeid = req.params.id;
  const {name, email, rentperday, imageurl} = req.body;

  const updateemployee = {

    name,
    email,
    rentperday,
    imageurl,
     
  };

  try {
      
      await Employee.findByIdAndUpdate(employeeid, updateemployee);
      return res.status(200).json({status : "Employee updated"});

  } catch (error) {
      
      return res.status(400).json({status : "Error with update employee", message : error});
    }

});


module.exports=router;
