import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { wrapper, State } from "../store/store";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { getProducts } from "../store/actions/product";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import * as types from "../store/actions/types";
const fs = require("fs-extra");

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Home() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { products } = useSelector<State, State>((state) => state);

  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <main>
          <Grid container spacing={3} className={classes.mainGrid}>
            <Sidebar />
            <ProductList products={products} />
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
