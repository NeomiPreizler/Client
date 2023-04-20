import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
export const AppBarr = () => {
    const {currentUser}=useContext(AuthContext)
    const {logout}=useContext(AuthContext)
    return (
        <Box sx={{ flexGrow: 1 }}>
            
            <AppBar style={{background:"#528161"}} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {currentUser ?<></>:<Button color="inherit" style={{background:"#77a485"}}  href="/login">Login</Button>}
                    {currentUser ? <Button style={{background:"#77a485"}} onClick={()=>{logout()}} >Logout</Button> : <Button color="inherit" href='/register' >Rgister</Button>}
                    
                </Toolbar>
            </AppBar>
        </Box>)
}