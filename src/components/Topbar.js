import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import { GlobalContext } from '../context/GlobalContext'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { items } = useContext(GlobalContext)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Ecommerce App by Obaid Ashraf
          </Typography>
          <Link to="/cart" style={{ color: '#fff' }}>
            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
              <Badge badgeContent={items} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}