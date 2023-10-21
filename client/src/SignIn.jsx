import React, {useState} from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom" 
import "./SignIn.css"

export default function SignIn () {

    const [name, setName] = useState() 
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !password) {
            alert("Name and Password are required.");
            return;
          }

        axios.post("http://localhost:3001/signIn", {name, password})
        .then(result => console.log(result))
        navigate("/login")
        .catch(err => console.log(err))
    }

    const handleLogin = (e) => {
        navigate("/login")
    }

    return ( 
        <div className="signInBody">
            <div class="session">
                <div class="left"> 
                    <svg enable-background="new 0 0 300 302.5" version="1.1" viewBox="0 0 300 302.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                        <style type="text/css">
                        {`.st01 { fill: #fff; }`}
                        </style>
                        <path class="st01" d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z"/>
                    </svg>      
                </div>
            <form class="log-in" onSubmit={handleSubmit}>

                <label className="header">Z - TRONIC</label> 
                <label className="header2">The Electronic Store</label>
                <label className="header3">WELCOME</label>

                <div class="floating-label">
                    <label for="username" className="username">Username</label>
                    <input type="name" class="form-control-sign" id="username" aria-describedby="nameHelp"
                    onChange={(e)=> setName(e.target.value)}/>
                </div> 
                <div class="floating-label">
                    <label for="exampleInputPassword1" className="password">Password</label>
                    <input type="password" class="form-control-sign" id="password"
                    onChange={(e)=> setPassword(e.target.value)}/>
                </div> 
                <button  type="register" class="btn-register">SIGN IN</button>
                <br/>
                <p className="p1">Already have an account?</p>
                <button type="login" class="btnS-login" onClick={handleLogin}>
                    LOGIN
                </button>
                
            </form>
            </div>
        </div>
    )

    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <div class="mb-3">
    //                 <label for="exampleInputName" class="form-label">Name</label>
    //                 <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp"
    //                 onChange={(e)=> setName(e.target.value)}/>
    //             </div> 
    //             <div class="mb-3">
    //                 <label for="exampleInputPassword1" class="form-label">Password</label>
    //                 <input type="password" class="form-control" id="exampleInputPassword1"
    //                 onChange={(e)=> setPassword(e.target.value)}/>
    //             </div> 
    //             <button  type="register" class="btn btn-primary">Sign In</button>
    //             <br/>
    //             <p>Already have an account?</p>
    //             <Link to={"/login"} type="login" class="btn btn-primary">Login</Link>
    //         </form>
            
    //     </div>
    // )
}