
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter ,Route,Link, Routes } from 'react-router-dom';
import Adminscreen from './screen/Adminscreen'


function App() {
  return (
    <div className="App">

         <Navbar/>

      <BrowserRouter>
      
      <Routes>
      <Route path="/admin" exact Component={Adminscreen}/>
      
      </Routes>

      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
