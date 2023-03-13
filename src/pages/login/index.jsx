import { useState, useEffect } from "react"
//import PropTypes from 'prop-types';
import axios from "axios";
import { Link } from "react-router-dom"
import { useFormik } from "formik";
import { Button, TextField } from '@mui/material';
import useToken from "../useToken";
import { Navigate } from "react-router-dom";
const Login = () => {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const loginUser = async (userName, password ) => {
  //   const data = await axios.post("http://localhost:3600/api/auth/login", { userName, password });
  //   sessionStorage.setItem("token",data)
  //   // useToken.saveToken(data);
  //   console.log(data)
  // };

  const { values, handleSubmit, handleChange, getFieldProps } = useFormik({
    initialValues: {
      userName: "",
      password: ""
    },
    onSubmit: async (values) => {
      try {
        const data = await axios.post("http://localhost:3600/api/auth/login", { userName: values.userName, password: values.password });
        // useToken.saveToken(data);
        console.log("before");
        localStorage.setItem("token", data.accessToken)
        localStorage.setItem("userName",data.userName);
         console.log(data.accessToken)
        Navigate('/profile');
       
      }
      catch (err) {
        console.log(err);
      }
    }
  })
  return (


    <div className="login">
      <form>
        {/* // //   <h1>Login page</h1>

      // //   <input type="text" onChange={(e) => { setUserName(e.target.value) }} value={userName} placeholder="please enter your name"></input>
      // //   <br></br>
      // //   <input type="password" onChange={(e) => { setPassword(e.target.value) }}value={password} placeholder="please enter your password"></input>
      // //   <br></br>
      // //   <br></br>
      // //   <button onClick={() => { loginUser() }}></button>
      // //   <br></br> */}

        <TextField
          value={values.userName}

          id="filled-basic"
          label="userName"
          variant="filled"
          onChange={handleChange}
          {...getFieldProps("userName")}
        />
        <TextField
          value={values.password}

          id="filled-basic"
          label="password"
          variant="filled"
          onChange={handleChange}
          {...getFieldProps("password")}
        />

        <Button type="submit" variant="outlined">login</Button>
        <Link to="/register">if your not signed in enter here</Link>

      </form>
    </div>
  )
}
export default Login;