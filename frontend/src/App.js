
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter ,Route,Link, Routes } from 'react-router-dom';
import Adminscreen from './screen/Adminscreen'
import Addemlpyeescreen from "./screen/Addemlpyeescreen"

function App() {
  return (
    <div className="App">

         <Navbar/>

      <BrowserRouter>
      
      <Routes>
      <Route path="/admin" exact Component={Adminscreen}/>
      <Route path="/addemlpyees" exact Component={Addemlpyeescreen}/>
      </Routes>

      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
