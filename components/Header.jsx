import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { State } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Typography from '@material-ui/core/Typography';
import MiniBasket from './MiniBasket';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
}));

const Header = () => {
  const basket = useSelector((state) => state.basket);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const numberOfBasketItems = basket.length;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <MoreHorizIcon />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Inveon Case
        </Typography>

        <Button variant="outlined" size="small">
          Giriş Yap
        </Button>

        <IconButton aria-describedby={id} color="primary" onClick={handleClick}>
          <Badge badgeContent={numberOfBasketItems} color="secondary">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>

        <MiniBasket
          id={id}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          basket={basket}
        />
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
