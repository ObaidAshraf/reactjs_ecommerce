import React, { useState, useContext, useEffect } from 'react';
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
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import Topbar from '../components/Topbar'
import { GlobalContext } from '../context/GlobalContext'


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
  icon: {
    // marginRight: theme.spacing(2),
    cursor: 'pointer'
  },
  heroContent: {
    backgroundColor: '#eee',
    // backgroundColor: theme.palette.background.paper,
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
    // paddingTop: '56.25%', // 16:9
    width: 100,
    height: 100,
    backgroundSize: 'contain'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  table: {
    minWidth: 650,
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#333',
    color: '#fff'
  },
  qty: {
    backgroundColor: '#eee',
    width: 50,
    height: 30,
    borderRadius: 10,
    padding: '5px 0px 0px 20px'

  }
}));

export default function Cart() {
  const classes = useStyles();
  const { cart, cost, totalCost, deliveryFee, inc_qty } = useContext(GlobalContext)
  let [products, setProducts] = useState([])
  let [pQty, setProductQty] = useState({})
  let [itemsCount, setItemsCount] = useState(0)


  useEffect( () => {
    let _count = 0
    setProducts(cart)
    cart.map(product => {
      // pQty[product.id] = product.qty
      _count += product.qty
    })
    setItemsCount(_count)
  }, [ cart ])

  function handleIncrease(evt) {
    let pid = evt.target.id
    pQty[pid] = ++pQty[pid]
    inc_qty([pid, ++pQty[pid]])
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Topbar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Typography component="h1" variant="h2" color="textPrimary" gutterBottom>
                <Box fontWeight={500}>Cart</Box>
            </Typography>
            <Grid container style={{display: 'flex', backgroundColor: '#e0e0e0'}}>
                <Grid item xs={12} sm={8} lg={8}>
                    <TableContainer component={Paper} style={{backgroundColor: '#e0e0e0'}}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>
                        {products.map((product, idx) => (
                            <TableRow key={idx}>
                            <TableCell component="tb" scope="row">
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={product.image}
                                    title={product.title}
                                />
                            </TableCell>
                            <TableCell>
                              <Typography variant="p" color="inherit">
                                <Box fontWeight={500}>{product.title}</Box>
                              </Typography>
                              {/* <Typography variant="p">
                                Black | Medium
                              </Typography> */}
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6" color="inherit" noWrap>
                                <Box fontWeight={500}>${product.price}</Box>
                                {/* <Box fontWeight={500}>${product.price.toFixed(2)}</Box> */}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Grid container justify="space-between">
                                {/* <RemoveIcon id={product.id} className={classes.icon}/> */}
                                <Container className={classes.qty}>
                                  {product.qty}
                                </Container>
                                {/* <AddIcon id={product.id} className={classes.icon} onClick={handleIncrease} /> */}
                              </Grid>
                            </TableCell>
                            <TableCell>
                              <ClearIcon />
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={4} lg={4} style={{backgroundColor: '#d1d1d1', padding: 20}}>
                  <Typography gutterBottom variant="h4" component="h2">
                    Order Summary
                  </Typography>
                  <Grid container justify="space-between">
                    <Typography gutterBottom variant="p" style={{fontSize: 20}}>
                      {itemsCount} Items
                    </Typography>
                    <Typography gutterBottom variant="p" style={{fontSize: 20}}>
                      ${cost}
                    </Typography>
                  </Grid>
                  <Grid container justify="space-between">
                    <Typography gutterBottom variant="p" style={{fontSize: 20}}>
                      Delivery Fee
                    </Typography>
                    <Typography gutterBottom variant="p" style={{fontSize: 20}}>
                      ${deliveryFee}
                    </Typography>
                  </Grid>
                  <Grid container justify="space-between"  style={{fontSize: 25, paddingTop: 10}}>
                    <Typography gutterBottom variant="p">
                      <Box fontWeight={500}>Total Cost</Box>
                    </Typography>
                    <Typography gutterBottom variant="p">
                      <Box fontWeight={500}>${totalCost}</Box>
                      {/* <Box fontWeight={500}>${totalCost.toFixed(2)}</Box> */}
                    </Typography>
                  </Grid>
                  <Button fullWidth={true} variant="contained" color="dafault" className={classes.button}>
                    Checkout
                  </Button>
                </Grid>
            </Grid>
          </Container>
        </div>
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