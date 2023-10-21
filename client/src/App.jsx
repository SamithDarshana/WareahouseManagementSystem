import { useState } from 'react' 
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom" 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar' 
import Home from './Home';
import Laptop from './Laptop';
import TeleVision from './TeleVision';
import './App.css'
import AddLaptops from './AddLaptop';
import UpdateLaptops from './UpdateLaptop';
import AddTelevision from './AddTelevision';
import updateTelevision from './UpdateTelevision';
import SignIn from './SignIn';
import Login from './Login';


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
