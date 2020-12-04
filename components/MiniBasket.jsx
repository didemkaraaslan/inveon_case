import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/CloseSharp";
import { removeFromBasket } from "../store/actions/basketActions.ts";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  price: {
    marginTop: theme.spacing(1),
  },
}));

const MiniBasket = ({ id, anchorEl, open, handleClose, basket }) => {
  const dispatch = useDispatch();

  const handleRemoveFromBasket = (productID) => {
    dispatch(removeFromBasket(productID));
  };

  const classes = useStyles();
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      className={classes.popover}
    >
      <List className={classes.root}>
        {basket.length <= 0 ? (
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Sepetiniz bomboş!"
              secondary={<p>{"Hemen bir şeyler ekleyin :D"}</p>}
            />
          </ListItem>
        ) : (
          <>
            {basket.map((product) => (
              <ListItem alignItems="flex-start" key={product.productID}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={product?.productImage} />
                </ListItemAvatar>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <ListItemText primary={product?.productBrand} />
                    <ListItemText secondary={product?.productDetail} />
                  </Grid>
                  <Grid item xs={4}>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="subtitle2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Renk{" "}
                          </Typography>
                          - {product?.productColor}
                        </React.Fragment>
                      }
                    />
                    <ListItemText
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="subtitle2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Beden{" "}
                          </Typography>
                          - {product?.productSize}
                        </React.Fragment>
                      }
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="h6"
                      color="secondary"
                      className={classes.price}
                    >
                      {product?.productPrice} TL
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Tooltip title="Sepetten Çıkar" aria-label="Remove">
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() =>
                          handleRemoveFromBasket(product.productID)
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </>
        )}
      </List>
    </Popover>
  );
};

export default MiniBasket;
