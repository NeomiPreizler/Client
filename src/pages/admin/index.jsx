import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";


export const AdminScreen=()=>{


const navigate = useNavigate();
return(
    
    <>
    <br></br>
    <Button variant="contained" href="/previousCrosses">previous  crosses </Button>
    <br></br><br></br>
    <Button variant="contained" href="/adjusmentFunction">Adjustment Function</Button>
    <br></br><br></br>
    <Button variant="contained" href="/enterDataBase">for entering to database</Button>
    </>
)
}