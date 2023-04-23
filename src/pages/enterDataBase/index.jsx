import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button } from '@mui/material';
export const EnterDataBase=()=>{
return(
    <>
    <br></br>
    <Button href="/DBdonaters"onClick={()=>{}}>Donaters</Button>
    <Button href="/DBneedsDonation" onClick={()=>{}}>needsDonation</Button>
    <Button href="/DBusers" onClick={()=>{}}>users</Button>
    </>
)
}