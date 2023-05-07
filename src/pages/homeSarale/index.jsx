import "./index.css";
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
// import {  useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
// import InatialTest from "../startToRegister";
import { AuthContext } from "../../context/authContext";
const Home = () => {
     const navigate = useNavigate()

     const { currentUser } = useContext(AuthContext)
     console.log("please print ", currentUser, "currentUser.role");
     // const { firstTimeIn } = useContext(AuthContext);
     // console.log(currentUser);
     console.log("please print ", currentUser, "currentUser.role");
     // console.log("please print 1",currentUser.role);
     return (<>

          <br></br><br></br>
          {/* {donater? <InatialTest/>:<></>} */}
          {/* {firstTimeIn == true ? <Button variant="contained" href="/donater">To view and update your form</Button> : */}
          {/* <Button variant="contained" onClick={() => navigate(`StartToRegister/${'donater'}`)}>DONATER</Button> */}
          {currentUser && <>{currentUser.role === "ADMIN" ?
               <Button variant="contained" href="/admin">enter management screen</Button> : <></>}
               {currentUser.role == null ? <>
                    <Button variant="contained" style={{ background: "#7bb28c" }} onClick={() => navigate(`StartToRegister/${'donater'}`)}>donater</Button><br></br><br></br>
                    <Button variant="contained"  style={{ background: "#7bb28c" }} onClick={() => navigate(`StartToRegister/${'needsDonation'}`)}>needsDonation</Button></> : <></>

               }
               {currentUser.role === "DONATER" ? <Button variant="contained" href="/donater">To view and update your form</Button> : <></>}
               {currentUser.role === "NEEDSDONATION" ? <Button variant="contained" href="/needsDonation">To view and update your form</Button> : <></>}
          </>}

          {currentUser == null ? <>
               <Button variant="contained" style={{ background: "#7bb28c" }} onClick={() => navigate(`StartToRegister/${'donater'}`)}>donater</Button><br></br><br></br>
               <Button variant="contained" style={{ background: "#7bb28c" }} onClick={() => navigate(`StartToRegister/${'needsDonation'}`)}>needsDonation</Button></> : <></>
          }

          {/* <Button variant="contained"  onClick={()=>navigate(`${`/StartToRegeste/${type}`}`)}>donater</Button><br></br><br></br>*/}

     </>);

}
export default Home



