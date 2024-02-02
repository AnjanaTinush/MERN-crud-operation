
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter ,Route,Link, Routes } from 'react-router-dom';
import Adminscreen from './screen/Adminscreen'
import Updateemployee from './screen/Updateemployee';


function App() {
  return (
    <div className="App">

         <Navbar/>

      <BrowserRouter>
      
      <Routes>
      <Route path="/admin" exact Component={Adminscreen}/>
      <Route path='/update/:employeeid' element={<Updateemployee/> } />

      
      </Routes>

      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
