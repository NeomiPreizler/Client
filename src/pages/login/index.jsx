import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom"
import { useFormik } from "formik";
import { Button, TextField } from '@mui/material';
import useToken from "../useToken";
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
        // const userDitails = await axios.post("http://localhost:3600/api/auth/login", { userName: values.userName, password: values.password, email: values.email });
        // localStorage.setItem("token", userDitails.data.accessToken)
        // setCurrentUser(userDitails.data.user);
        // setToken(userDitails.data.accessToken);
        // localStorage.setItem("user", userDitails.data.user)
        
      }
      catch (err) {
        console.log(err);
      }
    }
  })
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
      {/* <h1>Login page</h1>

      <input type="text" onChange={(e) => { setUserName(e.target.value) }} value={userName} placeholder="please enter your name"></input>
      <br></br>
      <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder="please enter your password"></input>
      <br></br>
      <br></br>
      <button onClick={() => { loginUser() }}></button>
      <br></br> */}
        <TextField
          // value={values.userName}
          id="filled-basic"
          label="userName"
          variant="filled"
          //  onChange={handleChange}
          {...getFieldProps("userName")}
        /><br></br>
        <TextField
          // value={values.userName}
          id="filled-basic"
          label="email"
          variant="filled"
          //  onChange={handleChange}
          {...getFieldProps("email")}
        /><br></br>
        <TextField
          // value={values.password}
          id="filled-basic"
          label="password"
          variant="filled"
          // onChange={handleChange}
          {...getFieldProps("password")}
        /><br></br>

        <Button type="submit" variant="outlined">login</Button><br></br>
        <Link to="/register">if your not signed in enter here</Link>

      </form>
    </div>
  )
}
export default Login;