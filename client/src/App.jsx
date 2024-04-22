import { useState } from 'react' 
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom" 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar/NavBar' 
import Home from './pages/Home';
import Laptop from './pages/Laptop';
import TeleVision from './pages/TeleVision';
import './App.css'
import AddLaptops from './pages/AddLaptop';
import UpdateLaptops from './pages/UpdateLaptop';
import AddTelevision from './pages/AddTelevision';
import updateTelevision from './pages/UpdateTelevision';
import SignIn from './login/SignIn';
import Login from './login/Login';


function App() { 

  //const location = useLocation();

  return (

    <Router> 
      
      <div>
 
         
        <Routes>
          <Route path='/' exact Component={SignIn}/>
        </Routes>

        <Routes>
          <Route path='/login' exact Component={Login}/>
        </Routes> 
        <Routes>
          <Route path='/home' exact Component={Home}/>
        </Routes> 

        <Routes>
          <Route path='/laptop' exact Component={Laptop}/>
        </Routes>

        <Routes>
          <Route path='/addLaptop' exact Component={AddLaptops}/>
        </Routes>

        <Routes>
          <Route path='/updateLaptop/:id' exact Component={UpdateLaptops}/>
        </Routes>

        <Routes>
          <Route path='/television' exact Component={TeleVision}/>
        </Routes>

        <Routes>
          <Route path='/addTelevision' exact Component={AddTelevision}/>
        </Routes>

        <Routes>
          <Route path='/updateTelevision/:id' exact Component={updateTelevision}/>
        </Routes> 
      </div>
    </Router>
  )
}

export default App
