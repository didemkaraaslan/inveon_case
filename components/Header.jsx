import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
}));

const Header = () => {
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
        <IconButton color="primary">
          <ShoppingBasketIcon />
        </IconButton>
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
