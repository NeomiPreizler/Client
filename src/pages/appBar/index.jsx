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
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';



////////////////
import { styled, alpha } from '@mui/material/styles';

import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// /////


const pages = [{ name: 'Home', url: "/" },
{ name: 'About Us', url: "/about-us" },
{ name: 'Donate', url: "/donater" },
{ name: 'Need a donation', url: "/needs-donation" },
{ name: 'Medical information', url: "/medical-information" }
];



////////


const StyledMenu = styled((props) => (
  <Menu

    elevation={0}

    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    my: 2, color: '#6F8BA4',
    fontFamily: '"Handlee", cursive', '&:hover': {
      // backgroundColor: '#003366',
      borderColor: "#003366",
      boxShadow: 'none',
      // borderRadius: 6,
      // marginTop: theme.spacing(1),
      // minWidth: 180,
      // color:
      //   theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      // boxShadow:
      //   'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      // '& .MuiMenu-list': {
      //   padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      //   '& .MuiSvgIcon-root': {
      //     fontSize: 18,
      //     color: theme.palette.text.secondary,
      //     marginRight: theme.spacing(1.5),
      //   },
      '&:active': {
        // backgroundColor: 
        // alpha(
        //   theme.palette.primary.main,
        //   theme.palette.action.selectedOpacity,
        // ),
        borderColor: '#003366'
      },
    },
  },
}));
////////////

function Nav() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { currentUser, logout } = React.useContext(AuthContext)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickNeedy = () => {
    navigate('/needy-medical-details');
  }
  const handleClickDonor = () => {
    navigate('/donater-medical-details');
  }

  return (
    <AppBar style={{
      background: "#f2f2f2"
    }} position="fixed" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*  logo and text for desktop */}
          <Stack component={Link} to="/" sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            flexDirection: "row",
            alignItems: "center",
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            gap: "3px"
          }}>

            <img style={{ maxHeight: "50px" }} src='..\..\img\lifecycle.png' />

            <Typography
              variant="h6"
              noWrap
              sx={{ fontFamily: 'fantasy' }}
            >
              LIFE-CYCLE
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
              color="black"
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
                <MenuItem component={Link} to={page.url} key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*  logo for mobile */}

          <Stack component={Link} to="/" sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexDirection: "row",
            alignItems: "center",
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
            <img style={{ maxHeight: "50px" }} src='..\..\img\lifecycle.png' />

          </Stack>
          {/*  menu buttons for desktop */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ borderColor: '#003366' }}>
              {pages.map((page) => (
        page.name !== 'Medical information' && (                <Button
                  component={Link} to={page.url}
                  key={page.name}
                  sx={{
                    my: 2, color: ' #6F8BA4', display: 'block',
                    fontFamily: '"Handlee", cursive',
                    '&:hover': {
                      // backgroundColor: '#55e455',
                      borderColor: "#003366",
                      // boxShadow: 'none',
                    }

                  }}
                >
                  {page.name}
                </Button>)))}
              
              <Button
                sx={{
                  my: 2, color: '#6F8BA4', backgroundColor: 'inherit',
                  fontFamily: '"Handlee", cursive', '&:hover': {
                    // backgroundColor: '#003366',
                    borderColor: "#003366",
                    boxShadow: 'none',
                  }
                }}
                id="demo-customized-button"
                // aria-controls={open ? 'demo-customized-menu' : undefined}
                // aria-haspopup="true"
                // aria-expanded={open ? 'true' : undefined}
                // variant="contained"
                // disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Medical information</Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
              onClose={handleClose}
              >
                <MenuItem onClick={() => { handleClickDonor() }} disableRipple>
                  Donate's Information
                </MenuItem>
                <MenuItem onClick={() => handleClickNeedy()} disableRipple>
                  recipient's Information
                </MenuItem>

              </StyledMenu>

            </ButtonGroup>
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            {!currentUser && <Button component={Link} color="inherit" style={{ background: "#003366", fontFamily: '"Handlee", cursive' }} to="/login">Login</Button>}
            {currentUser ? <Button style={{ color: "inherit", background: "#003366", fontFamily: '"Handlee", cursive' }} onClick={() => { logout() }} >Logout</Button> : <Button component={Link} sx={{ "color": "#000d1a", fontFamily: '"Handlee", cursive' }} to='/register' >SignUp</Button>}

          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Nav;