import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    width: "100%",
    height: 300,
    textAlign: "center",
  },
  cardContent: {
    flexGrow: 1,
    position: "relative",
    minHeight: "120px",
  },
  fadeColor: {
    fontWeight: "normal",
    color: "#999999",
  },
  price: {
    fontWeight: 600,
    textAlign: "center",
    position: "absolute",
    bottom: "-10px",
    right: "40%",
  },
  shape: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    position: "absolute",
    top: "10px",
    right: "4%",
  },
  kırmızı: {
    backgroundColor: red[500],
  },
  mavi: {
    backgroundColor: blue[400],
  },
  yeşil: {
    backgroundColor: green[700],
  },
  pudra: {
    backgroundColor: pink[100],
  },
  mor: {
    backgroundColor: purple[600],
  },
  siyah: {
    backgroundColor: "#000",
  },
}));

const Product = ({ product }) => {
  const classes = useStyles();

  const color = product?.productColor;

  const circleStyle = clsx({
    [classes.shape]: true,
    [classes[color]]: color,
  });

  const circle = <div className={circleStyle} />;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.cardMedia}
          image={product?.productImage}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product?.productBrand}
          </Typography>
          <Typography>{product?.productDetail}</Typography>

          <Typography
            gutterBottom
            variant="h5"
            color="secondary"
            className={classes.price}
          >
            {product?.productPrice} TL
          </Typography>

          {circle}
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="medium" color="primary" fullWidth>
            {"Sepete Ekle"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;

// "productID": "5fc686279cf73f79e855477e",
// "productName": "Kayla",
// "productPrice": 519,
// "productColor": "mavi",
// "productSize": "l",
// "inStock": true
