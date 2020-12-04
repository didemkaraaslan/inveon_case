import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { wrapper } from "../store/store";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header.tsx";
import Sidebar from "../components/Sidebar.tsx";
import ProductList from "../components/ProductList.tsx";
import * as types from "../store/actions/types";
const fs = require("fs-extra");

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Home() {
  const filteredProducts = useSelector<State, Array<Product>>((state) => {
    let products = state.products;
    const { colors, sizes, categories } = state.filters;

    if (colors.length > 0) {
      products = products.filter((product) =>
        colors.includes(product.productColor)
      );
    }

    if (sizes.length > 0) {
      products = products.filter((product) =>
        sizes.includes(product.productSize)
      );
    }

    if (categories.length > 0) {
      products = products.filter((product) =>
        categories.includes(product.productCategory)
      );
    }

    return products;
  });

  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <main>
          <Grid container spacing={3} className={classes.mainGrid}>
            <Sidebar />
            <ProductList products={filteredProducts} />
          </Grid>
        </main>
      </Container>
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  async ({ store, preview }) => {
    const { products } = await fs.readJson("data/products.json");
    store.dispatch({ type: types.FETCH_PRODUCTS, payload: products });
  }
);
