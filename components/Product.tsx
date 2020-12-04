import React from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import { addToBasket } from "../store/actions/basketActions";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    width: "100%",
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
  },
  detail: {
    height: 50,
    overflow: "hidden",
  },
  shape: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    position: "absolute",
    top: "10px",
    right: "4%",
  },
  red: {
    backgroundColor: red[500],
  },
  blue: {
    backgroundColor: blue[400],
  },
  green: {
    backgroundColor: green[700],
  },
  powder: {
    backgroundColor: pink[100],
  },
  purple: {
    backgroundColor: purple[600],
  },
  black: {
    backgroundColor: "#000",
  },
}));

interface ProductProps {
  product: Product;
}
const Product: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToBasket = (product: Product) => {
    dispatch(addToBasket(product));
  };

  const classes = useStyles();
  const color: ColorsType = product?.productColor;
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
          height="500"
          className={classes.cardMedia}
          image={product?.productImage}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product?.productBrand}
          </Typography>
          <Typography className={classes.detail}>
            {product?.productDetail}
          </Typography>

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
          <Button
            variant="outlined"
            size="medium"
            color="primary"
            fullWidth
            onClick={() => handleAddToBasket(product)}
          >
            {"Sepete Ekle"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
