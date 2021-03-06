import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Topbar from '../components/Topbar'
import { useParams, Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    paddingTop: '20vh',
    flexGrow: 1,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 400
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '100%',
    height: '100%',
    backgroundSize: 'contain'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  cardRoot: {
    display: 'flex',
    maxWidth: 700,
    padding: 10
    // flexGrow: 1,
    // height: 400,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'red',
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const { id } = useParams()
  const { allProducts, push_to_cart } = useContext(GlobalContext)
  let [product, setProduct] = useState({})

  useEffect( () => (
    setProduct(allProducts[id])
  ), [ allProducts, id ])

  function handleClick() {
    if (product["qty"]) {
      product["qty"] = ++product["qty"]
    }
    else {
      product["qty"] = 1
    }

    push_to_cart(product)
  }

  return (
    <>
    <Topbar />
    <Grid container  justify="center"  component="main" className={classes.root} spacing={2}>
    <CssBaseline />
      <Card className={classes.cardRoot}>
      <Grid item xs={12} sm={6} lg={6}>
        {/* <h1>Image here !</h1> */}
        {/* <div style={{width: '100%'}}> */}
          <CardMedia
            className={classes.cover}
            image={product ? product.image : null}
            title={product ? product.title : ''}
          />
        {/* </div> */}
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <CardContent className={classes.content}>

              <Typography component="h1" variant="h5">
                {product ? product.title : ''}
              </Typography>
              <Typography component="div">
                <Box fontWeight="fontWeightBold">
                    ${product ? product.price : 0}
                </Box>
            </Typography>
            <Typography component="p">
              {product ? product.description : ''}
            </Typography>
            {/* <FormControl vairant="outlined" className={classes.formControl}>
              <InputLabel>Color</InputLabel>
              <Select
                autoWidth={true}
                value={""}
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl vairant="outlined" className={classes.formControl}>
              <InputLabel>Size</InputLabel>
              <Select
                // autoWidth={true}
                value={""}
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl> */}
            <Link to="/cart" onClick={handleClick} style={{ textDecoration: 'none' }}>
            <Button fullWidth={true} variant="contained" color="primary" className={classes.button} 
              endIcon={<Icon>shoppingCart</Icon>} 
              >
              Add to Cart
            </Button>
            </Link>

          </CardContent>
        {/* </div> */}
        </Grid>
      </Card>
    </Grid>
    </>
  );
}