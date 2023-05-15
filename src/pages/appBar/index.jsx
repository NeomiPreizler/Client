import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
export const AppBarr = () => {

    const { currentUser } = useContext(AuthContext)
    const { logout } = useContext(AuthContext)
    const navigate=useNavigate()
    const pages = ['Home', 'About Us', 'Donate','Need a donation','Medical information'];
    const routs = ['','About-us','Donater','needsDonation','MedicalInformation']




 

  const handleCloseNavMenu = (page) => {
    
    navigate(`/${page}`)
  
  };

  

    return (
 
    <AppBar style={{ background: "#528161" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       <img style={{width:"5%"}} src='..\..\img\lifecycle.png' href='./home' onClick={navigate('/')}></img>
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          
          </Box>
 
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,i) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(routs[i])}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

      
          {currentUser ? <></> : <Button color="inherit" style={{ background: "#77a485" }} href="/login">Login</Button>}
          {currentUser ? <Button style={{ background: "#77a485" }} onClick={() => { logout() }} >Logout</Button> : <Button color="inherit" href='/register' >Rgister</Button>}

        </Toolbar>
      </Container>
    </AppBar>
  );



        }
