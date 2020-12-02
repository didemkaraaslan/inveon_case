import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    maxWidth: '100%',
    height: '350px',
    textAlign: 'center',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Product = ({ product }) => {
  const classes = useStyles();

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
            {product?.productName}
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            {product?.productPrice}
          </Button>
          <Button size="small" color="primary">
            {product?.productPrice}
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
