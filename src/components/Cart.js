import React, { useState, useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import RemoveIcon from '@material-ui/icons/Remove';
// import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import Topbar from '../components/Topbar'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom';



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
  const { cart, cost, totalCost, deliveryFee, remove_from_cart, items, checkout } = useContext(GlobalContext)
  let [products, setProducts] = useState([])
  let [itemsCount, setItemsCount] = useState(0)
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (items)
      setOpen(true);
  };

  const handleClose = () => {
    handleCheckout()
    setOpen(false);
  };

  const handleCheckout = () => {
    checkout()
  }

  useEffect( () => {
    let _count = 0
    setProducts(cart)
    cart.map(product => (
      // pQty[product.id] = product.qty
      _count += product.qty
    ))

    setItemsCount(_count)
  }, [ cart ])

  function handleRemove(evt) {
    let pid = evt.target.id
    remove_from_cart(pid)
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
                              <ClearIcon id={product.id} className={classes.icon} onClick={handleRemove} />
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
                  <Button fullWidth={true} variant="contained" color="dafault" className={classes.button} onClick={handleClickOpen}>
                    Checkout
                  </Button>
                </Grid>
            </Grid>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography align="left" variant="subtitle1" color="textPrimary">
                Continue Shopping
              </Typography>
            </Link>
          </Container>
        </div>
      </main>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Thankyou for shopping with us.</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Order has been dispatched and will be delivered to you in 5 working days.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/" onClick={handleCheckout} style={{ textDecoration: 'none' }}>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}