import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { wrapper, State } from "../store/store";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { getProducts } from "../store/actions/product";
import * as types from "../store/actions/types";
const fs = require("fs-extra");

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector<State, State>((state) => state);

  return (
    <Container
      maxWidth="sm"
      style={{ backgroundColor: "#ccc", height: "100vh" }}
    >
      dsadsa
    </Container>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  async ({ store, preview }) => {
    const { products } = await fs.readJson("data/products.json");
    store.dispatch({ type: types.FETCH_PRODUCTS, payload: products });
  }
);
