import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({}));

interface ProductListProps {
  products: Array<Product>;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} item xs={12} md={10}>
      {products.map((product) => (
        <Product key={product.productID} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
