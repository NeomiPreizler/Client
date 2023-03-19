import "./index.css";
import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";
// import {  useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import InatialTest from "../startToRegister";
const Home = () => {
     const navigate = useNavigate()
     
     return (<>
          <h1>Home</h1>
          {/* {donater? <InatialTest/>:<></>} */}
          <Button variant="contained"  onClick={()=>navigate(`StartToRegister/${'donater'}`)}>donater</Button><br></br><br></br>

          {/* <Button variant="contained"  onClick={()=>navigate(`${`/StartToRegeste/${type}`}`)}>donater</Button><br></br><br></br> */}
          <Button variant="contained"  onClick={()=>navigate(`StartToRegister/${'needsDonation'}`)}>needsDonation</Button>
     </>
     )
}
export default Home


//<Button variant="contained"  onClick={()=>navigate(`${"/StartToRegeste/donater"}`)}>donater</Button><br></br><br></br>
