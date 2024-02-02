// updateemployee.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



const Updateemployee = ()=> {
  const { employeeid } = useParams();

  const {employee,setemployee}=useState([]);

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [rentperday, setrentperday] = useState('');
  const [imageurl, setimageurl] = useState('');

  useEffect(() => {

    async function employeedetails() {

        try {
            const data = (await axios.post("http://localhost:5000/employees/${employeeid}")).data;
            setemployee(data.employee);
            console.log(data.employee);

            setname(data.employee.name);
            setemail(data.employee.email);
            setrentperday(data.employee.rentperday);
            setimageurl(data.employee.imageurl);
          

        } catch (error) {

            console.log(error);
           
        }
    }
    employeedetails();

}, [])


  return (
    <div className="row">
      <div className="col-md-5">
        <input type='text' className="form-control" placeholder="name" value={name}  />
        <input type='text' className="form-control" placeholder="email" value={email}  />
        <input type='text' className="form-control" placeholder="rent per day" value={rentperday}  />
        <input type='text' className="form-control" placeholder="Image URL 1" value={imageurl} />
        <div className="text-right">
          <button className="btn btn-primary mt-2">Update Employee</button>
        </div>
      </div>
     
    </div>
  );
}

export default Updateemployee;
