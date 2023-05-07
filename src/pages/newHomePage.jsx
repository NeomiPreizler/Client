import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, IconButton, Typography, Container, Grid, Card, CardContent, CardMedia } from "@material-ui/core";
// import { Menu as MenuIcon } from "@material-ui/icons-material";
//import { Menu as MenuIcon } from "@material-ui/icons/";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#4a148c",
  },
  logo: {
    color: "#fff",
    fontFamily: "Arial",
    fontSize: "1.8rem",
    fontWeight: 600,
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  menuButton: {
    color: "#fff",
  },
  hero: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: "#fff",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 0, 4),
    },
  },
  heroAnimation: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    height: "60vh",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
      height: "40vh",
    },
  },
  content: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  card: {
    display: "flex",
    margin: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      margin: theme.spacing(2),
    },
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.logo}>
            Kidney Donation
          </Typography>
          <Button color="inherit" className={classes.menuButton}>
            Register
          </Button>
          <Button color="inherit" className={classes.menuButton}>
            Login
          </Button>
          <IconButton edge="end" color="inherit" aria-label="menu" className={classes.menuButton}>
            {/* <MenuIcon /> */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.hero}>
        <div className={classes.heroAnimation}>
          <Typography variant="h2">Giving is receiving</Typography>
        </div>
        <CardMedia className={classes.heroImage} image="https://source.unsplash.com/featured/?kidney" title="Kidney donation" />
        <Container maxWidth="sm" className></Container>  </div></React.Fragment>)}
