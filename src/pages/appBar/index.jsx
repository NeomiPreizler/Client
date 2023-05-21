import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const pages = [{name:'Home', url:"/"},
{name:'About Us', url:"/about-us"},
{name:'Donate', url:"/donater"},
{name:'Need a donation', url:"/needs-donation"},
{name:'Medical information', url:"/medical-information"}];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { currentUser, logout } = React.useContext(AuthContext)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar style={{ background: "#528161" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        {/*  logo and text for desktop */}
          <Stack component={Link} to="/"   sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexDirection:"row",
              alignItems:"center",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              gap:"3px"
            }}>
                          <img       style={{maxHeight:"50px"}}   src='..\..\img\lifecycle.png' />

                 <Typography
            variant="h6"
            noWrap
      
          >
            LIFECYCLE
          </Typography>

          </Stack>

          {/*  menu opener icon for mobile */}


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem component={Link} to={page.url} key={page.name}  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
                 {/*  logo for mobile */}

          <Stack component={Link} to="/"   sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexDirection:"row",
              alignItems:"center",
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
          <img       style={{maxHeight:"50px"}}   src='..\..\img\lifecycle.png' />
         
          </Stack>
          {/*  menu buttons for desktop */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
               
              <Button
              component={Link} to={page.url}
                key={page.name}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
           
          {!currentUser && <Button component={Link} color="inherit" style={{ background: "#77a485" }} to="/login">Login</Button>}
          {currentUser ? <Button style={{ background: "#77a485" }} onClick={() => { logout() }} >Logout</Button> : <Button component={Link} color="inherit" to='/register' >Rgister</Button>}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;