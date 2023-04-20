import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";


export const AdminScreen=()=>{
previousCrosses=async()=>{

}

const navigate = useNavigate();
return(
    
    <>
    <Button onClick={()=>{previousCrosses()}}>previous  crosses </Button>
    <Button variant="contained" href="/adjusmentFunction">Adjustment Function</Button>
    <Button variant="contained" href="/enterDataBase">for entering to database</Button>
    </>
)
}