import React, { useEffect, useState, useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

import { getAllProducts } from '../Api/Api'
import Topbar from './Topbar'
import { GlobalContext } from '../context/GlobalContext'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'} All Rights Reserved
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
    padding: theme.spacing(2),
  },
}));


export default function Album() {
  const classes = useStyles();
  const { update_all_products } = useContext(GlobalContext);
  // const { allProducts, update_all_products } = useContext(GlobalContext);

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
  })

  return (
    <React.Fragment>
      <CssBaseline />
      <Topbar />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
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
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}