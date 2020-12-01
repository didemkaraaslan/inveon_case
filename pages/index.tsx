import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { wrapper, State } from "../store/store";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { getProducts } from "../store/actions/product";
const fs = require("fs-extra");
import * as types from "../store/actions/types";
export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector<State, State>((state) => state);

  console.log(products);

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography color="primary" variant="h1" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Typography color="secondary" variant="h1" component="h1" gutterBottom>
          Secondary
        </Typography>
      </Box>
    </Container>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  async ({ store, preview }) => {
    const { products } = await fs.readJson("data/products.json");
    store.dispatch({ type: types.FETCH_PRODUCTS, payload: products });
  }
);
