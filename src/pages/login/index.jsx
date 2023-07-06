import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom"
import { useFormik } from "formik";
import { Button, TextField } from '@mui/material';

import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  // const loginUser = async (userName, password ) => {
  //   const data = await axios.post("http://localhost:3600/api/auth/login", { userName, password });
  //   sessionStorage.setItem("token",data)
  //   // useToken.saveToken(data);
  //   console.log(data)
  // };
    const navigate = useNavigate();

  const {login} = useContext(AuthContext)
  const { values, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: ""
    },
    onSubmit: async (values) => {
      try {
        console.log(`nnnnnnn${values.userName}`);
        await login({ userName: values.userName, password: values.password, email: values.email });
        navigate('/');
        
      }
      catch (err) {
        console.log(err);
      }
    }
  })
  return (
    <div style={{padding:'80px'}} className="login">
      <form  onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="userName"
          variant="filled"
          {...getFieldProps("userName")}
        /><br></br>
        <TextField
          id="filled-basic"
          label="email"
          variant="filled"
          {...getFieldProps("email")}
        /><br></br>
        <TextField
          id="filled-basic"
          label="password"
          variant="filled"
          {...getFieldProps("password")}
        /><br></br>

        <Button type="submit" variant="outlined">login</Button><br></br>
        <Link to="/register">if your not signed in enter here</Link>

      </form>
    </div>
  )
}
export default Login;