import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { wrapper, State } from '../store/store';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import * as types from '../store/actions/types';
const fs = require('fs-extra');

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default function Home() {
  const { products } = useSelector<State, State>((state) => state);

  const classes = useStyles();
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
    const { products } = await fs.readJson('data/products.json');
    store.dispatch({ type: types.FETCH_PRODUCTS, payload: products });
  }
);
