// updateemployee.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



const Updateemployee = ()=> {
  const { employeeid } = useParams();

  

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [rentperday, setrentperday] = useState('');
  const [imageurl, setimageurl] = useState('');

  

useEffect (() => {

  async function getEmployee(){

    try {
      const response = (await axios.post(`http://localhost:5000/api/employees/getallemployees/${employeeid}`)).data;
      console.log(response.employee);

      setname(response.employee.name);
      setemail(response.employee.email);
      setrentperday(response.employee.rentperday);
      setimageurl(response.employee.imageurl);

    } catch (error) {
      console.log(error)
    }

  }
  getEmployee();

},[])
async function UpdateUser(e){

  e.preventDefault();

  const update = {
    name,
    email,
    rentperday,
    imageurl
  }

  try {
    const response = (await axios.put(`http://localhost:5000/api/employees/updateemployee/${employeeid}`,update)).data;
    console.log(response);
    window.location.href = '/admin';
    
  } catch (error) {
    console.log(error);
  }
}


  return (
    <div className="row">
      <div className="col-md-5">
        <form onSubmit={UpdateUser}>
        <input type='text' className="form-control" placeholder="name" value={name}  
          onChange={(e) => {
            setname(e.target.value)
          }}
        />
        <input type='text' className="form-control" placeholder="email" value={email}  
          onChange={(e) => {
            setemail(e.target.value)
          }}
        />
        <input type='text' className="form-control" placeholder="rent per day" value={rentperday} 
          onChange={(e) => {
            setrentperday(e.target.value)
          }}
        />
        <input type='text' className="form-control" placeholder="Image URL 1" value={imageurl}
          onChange={(e) => {
            setimageurl(e.target.value)
          }}
        />
        <div className="text-right">
          <button className="btn btn-primary mt-2" type="submit">Update Employee</button>
        </div>
        </form>
      </div>
     
    </div>
  );
}

export default Updateemployee;
