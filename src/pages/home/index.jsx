import "./index.css";
import React from 'react';
import { Link,useNavigate } from "react-router-dom";
// import {  useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
const Home = () => {
     const navigate = useNavigate()
     return (<>
          <h1>Home</h1>
          <Button variant="contained"  onClick={()=>{navigate(`${"donater"}`)}}>donater</Button><br></br><br></br>
          <Button variant="contained"  onClick={()=>navigate(`${"needsDonation"}`)}>needsDonation</Button>
     </>
     )
}
export default Home