
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchBox: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    margin: theme.spacing(2),
  },
  card: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  favoriteButton: {
    marginRight: theme.spacing(1),
  }
}));

export function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            The Life Cycle
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" align="center">
            Find Your Perfect Match
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Connect with kidney donors and recipients worldwide.
          </Typography>
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <TextField
                variant="outlined"
                label="Enter your zip code or city"
                fullWidth
                className={classes.searchBox}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <Grid item xs={12} md={4} key={item}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Patient Name
                    </Typography>
                    <Typography variant="body2" component="p">
                      Age: 45<br />
                      Blood Type: O+<br />
                      Location: New York, NY
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <IconButton className={classes.favoriteButton}>
                      <FavoriteIcon />
                    </IconButton>
                    <Button size="small" color="primary">
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

// export default HomePage;