import React, { useState ,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Adminscreen() {
  return (
    <div className="mt-3 ml-3 mr-3 bs">
      <h2 className="text-center" style={{ fontSize: "30px" }}>
        <b>Admin Panal</b>
      </h2>
      <Tabs defaultActiveKey="1">
        
        <TabPane tab="Employees" key="1">
          <Employees/>
        </TabPane>
        <TabPane tab="Add employees" key="2">
        <Addemployee/>
        </TabPane>
       
      </Tabs>
    </div>
  )
}

export default Adminscreen

//ademployees

export function Addemployee() {

 
    const[name , setname] = useState('')
    const[email, setemail] = useState('')
    const[rentperday , setrentperday] = useState();
    const[imageurl , setimageurl] = useState('')
   

  async function addemployee(){

      const newemployee = {
        name,
        email,
        rentperday,
        imageurl 
      }
console.log(newemployee);
     try {
     
      const result = (await axios.post('http://localhost:5000/api/employees/addemployee', newemployee)).data;
        console.log(result)
      
       
     } catch (error) {
      
      console.log(error)
     
     }

    }

    return (
        <div className="row ">
          <div className="col-md-5">
            <input type='text' className="form-control" placeholder="name"
            value={name} onChange={(e)=>{setname(e.target.value)}}
            />

<input type='text' className="form-control" placeholder="email"
              value={email} onChange={(e)=>{setemail(e.target.value)}}
            />
            <input type='text' className="form-control" placeholder="rent per day"
             value={rentperday} onChange={(e)=>{setrentperday(e.target.value)}}
            />
           
           
            <input type='text' className="form-control" placeholder="Image URL 1"
             value={imageurl} onChange={(e)=>{setimageurl(e.target.value)}}
             />

              <div className="text-right">
              <button className="btn btn-primary mt-2" onClick={addemployee}>Add Employee</button>
            </div>

          </div>
         
          
        
        </div>
      
    )
  }
  export function Employees() {
    const [employee, setEmployee] = useState([]);
  
    const fetchData = async () => {
      try {
        const data = await axios.get("http://localhost:5000/api/employees/getallemployees");
        setEmployee(data.data); // Assuming the array is directly available in the response data
       
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Employees</h1>
  
          <table className="table table-bordered table-dark">
            <thead className="bs">
              <tr>

                <th>Name</th>
                <th>Email</th>
                <th>Rent per day</th>
                <th>Profile</th>
                <th>Action</th>
              </tr>
            </thead>
  
            <tbody>
              {employee.length > 0 &&
                employee.map((employee) => (
                  <tr key={employee._id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.rentperday}</td>
                    <td><img src={employee.imageurl[0]} alt="Profile" className="smallimg"/></td>
                    <td>
                      <Link to={`/update/${employee._id}`}><button className="btn1">update</button></Link>
                    <button className="btn2">delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          
        
        </div>
      </div>
    );
  }