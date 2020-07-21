import React, { useEffect, useState, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinkURL from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

import { getAllProducts } from '../Api/Api'
import Topbar from './Topbar'
import { GlobalContext } from '../context/GlobalContext'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <LinkURL color="inherit" href="https://material-ui.com/">
        Your Website
      </LinkURL>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const truncateTitle =  (str) => {
  return str.length > 40 ? str.substring(0, 40) + "..." : str;
}

const truncateDesc =  (str) => {
  return str.length > 150 ? str.substring(0, 150) + "..." : str;
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album() {
  const classes = useStyles();
  const { allProducts, update_all_products } = useContext(GlobalContext);

  let [products, setProducts] = useState([])

  useEffect( () => {
    // if (allProducts.length > 0) {
    //   setProducts(allProducts)
    // }
    // else {
      getAllProducts().then( data => {
        // console.log(data)
        setProducts(data)
        update_all_products(data);
      })
    // }
  }, [])


  return (
    <React.Fragment>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Topbar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {products.map((product, idx) => {
              let url = "/info/" + idx
              return (
              <Grid item key={idx} xs={12} sm={6} md={4}>
                <Link to={url} style={{
                  textDecoration: 'none'
                }}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.image}
                    title={product.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {truncateTitle(product.title)}
                    </Typography>
                    <Typography variant="body2">
                      {truncateDesc(product.description)}
                    </Typography>
                  </CardContent>
                  <CardActions style={{display: 'block'}}>
                    <Typography align="right" gutterBottom variant="h5" component="h2">
                      <Box fontWeight={500}>${(product.price)}</Box>
                    </Typography>
                  </CardActions>
                </Card>
                </Link>
              </Grid>
              )}
            )}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}