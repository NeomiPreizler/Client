import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  navButtons: {
    marginLeft: theme.spacing(2),
  },
}));

export default function HomePage2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Site
          </Typography>
          <Button color="inherit" className={classes.navButtons}>Form for Donor</Button>
          <Button color="inherit" className={classes.navButtons}>Form for Person in Need</Button>
          <Button color="inherit" className={classes.navButtons}>Personal Area</Button>
          <Button color="inherit" className={classes.navButtons}>About</Button>
        </Toolbar>
      </AppBar>
      <img src="https://via.placeholder.com/150" alt="opening image 1" />
      <img src="https://via.placeholder.com/150" alt="opening image 2" />
      {/* Form for Donor */}
      {/* Form for Person in Need */}
      {/* Personal Area */}
    </div>
  );
}
