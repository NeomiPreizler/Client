import { useState } from "react";
import axios from "axios";
import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [err, setErr] = useState(null);

    const registerToServer=async ()=>{
        try {
            await axios.post("http://localhost:3600/api/auth/register", {  userName, password, email });
            navigate('/')

        } catch (err) {
            setErr(err.response.data?.message);
        }
    }

    return (
        
            <div className="login">

             
                <h1>Register page</h1>
                
                <input type="text" onChange={(e)=>{ setUserName(e.target.value)}} value={userName} placeholder="please enter your name"></input>
                <br></br>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="please enter your password"></input> 
                <br></br>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="please enter your email"></input> 
                <br></br><br></br>
                <button onClick={()=>registerToServer()}>Register</button>
                 {/* <span>continue?</span>
                 <Link to="/home">
                    <button>continue?</button>
                </Link>  */}
                
                <br></br>
            </div>
    )
}
export default Register