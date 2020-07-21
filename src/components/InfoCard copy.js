import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    flexGrow: 1,
    paddingTop: '20vh'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    // margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cardRoot: {
    // flexGrow: 1,
    // minWidth: 275,
    maxHeight: 350,
    maxWidth: 600,
    width: 600,
    // borderRadius: 10,
    // backgroundColor: 'red',
    // boxShadow: '0px 0px 10px 5px #888'
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container  justify="center"  component="main" className={classes.root}>
      <CssBaseline />
      <Card className={classes.cardRoot}>
        <CardContent>
          <Grid item>
            <Grid container>
              <Grid item xs={12} sm={6}>
                {/* Image here */}
                <CardMedia
                // className={classes.media}
                image='https://source.unsplash.com/random'
                title="Contemplative Reptile"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container>
                  <Grid item xs={12} square>
                    <div className={classes.paper}>
                      {/* <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                      </Avatar> */}
                      <Typography component="h1" variant="h5">
                        LT 1 FALCON W
                      </Typography>
                      <Typography component="div">
                        <Box fontWeight="fontWeightBold">
                            $50.00
                        </Box>
                    </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* <Grid item xs={12} sm={6} lg={6}>
        <Grid container className={classes.card}>
          <Grid item xs={12} sm={6}>
            <CardMedia
            // className={classes.media}
            image="https://source.unsplash.com/random"
            title="Contemplative Reptile"
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            Text here
          </Grid>
        </Grid>
      </Grid> */}
      {/* <Grid item xs={false} sm={4} md={7} className={classes.shoeCard} /> */}
      {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            LT 1 FALCON W
          </Typography>
          <Typography component="div">
            <Box fontWeight="fontWeightBold">
                $50.00
            </Box>
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid> */}
    </Grid>
  );
}