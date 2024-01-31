import React, { useState ,useEffect} from "react";
import axios from "axios";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Adminscreen() {
  return (
    <div className="mt-3 ml-3 mr-3 bs">
      <h2 className="text-center" style={{ fontSize: "30px" }}>
        <b>Admin Panal</b>
      </h2>
      <Tabs defaultActiveKey="1">
        
        <TabPane tab="Rooms" key="1">
          
        </TabPane>
        <TabPane tab="Add Room" key="2">
        <Addroom/>
        </TabPane>
       
      </Tabs>
    </div>
  )
}

export default Adminscreen

export function Addroom() {

 
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
              <button className="btn btn-primary mt-2" onClick={addemployee}>Add Room</button>
            </div>

          </div>
         
          
        
        </div>
      
    )
  }
  
