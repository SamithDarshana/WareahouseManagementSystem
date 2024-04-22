import React, {useState} from "react" 
import axios from 'axios'
import { useNavigate } from "react-router-dom" 
import "./Login.css"


export default function Login () {

    const [name, setName] = useState() 
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", {name, password})
        .then(result => {
            console.log(result)
            if(result.data === "success") {
                navigate("/home")
            } else {
                alert("Invalid username or password")
            }
        }) 
        .catch(err => console.log(err))
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="login">LOGIN</h2>
                <div class="mb-3">
                    <label for="exampleInputUsername" class="login-label">User Name</label>
                    <input type="username" class="login-input" id="exampleInputUsername" aria-describedby="usernamelHelp"
                    onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="login-label">Password</label>
                    <input type="password" class="login-input" id="exampleInputPassword1"
                    onChange={(e)=> setPassword(e.target.value)}/>
                </div> 
                <br/> 
                <button type="login" class="btnL-login">LOGIN</button>
            </form>
            
        </div>
    )
}