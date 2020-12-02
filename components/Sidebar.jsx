import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from './Checkbox';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    marginTop: theme.spacing(2),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

const sidebar = {
  title: 'Filtreler',
  description: 'Ürünleri renk, beden ve fiyatlarına göre filtreleyin',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  category: [
    { key: 'male', name: 'Erkek' },
    { key: 'female', name: 'Kadın' },
  ],
};

const Sidebar = (props) => {
  const classes = useStyles();

  const { title, description, category } = sidebar;

  return (
    <Grid item xs={12} md={2}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Kategori
      </Typography>
      <FormGroup>
        {category.map((item) => (
          <FormControlLabel
            key={item.key}
            control={<Checkbox defaultChecked name="gilad" />}
            label={item?.name}
          />
        ))}
      </FormGroup>
    </Grid>
  );
};

export default Sidebar;
