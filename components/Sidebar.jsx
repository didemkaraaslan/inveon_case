import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "./Checkbox";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sectionHeader: {
    marginTop: theme.spacing(2),
  },

  section: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
}));

const sidebar = {
  title: "Filtreler",
  description: "Ürünleri renk, beden ve fiyatlarına göre filtreleyin",
  category: [
    { key: "male", name: "Erkek" },
    { key: "female", name: "Kadın" },
  ],
  size: [
    { key: "s", name: "S" },
    { key: "m", name: "M" },
    { key: "l", name: "L" },
    { key: "xl", name: "XL" },
  ],
  color: [
    { key: "red", name: "Kırmızı" },
    { key: "green", name: "Yeşil" },
    { key: "blue", name: "Mavi" },
  ],
};

const Sidebar = (props) => {
  const classes = useStyles();

  const { title, description, category, size, color } = sidebar;

  return (
    <Grid item xs={12} md={2}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>

      {/* Category Filter */}
      <Typography variant="h6" gutterBottom className={classes.sectionHeader}>
        Kategori
      </Typography>
      <Paper elevation={0} className={classes.section}>
        <FormGroup>
          {category.map((item) => (
            <FormControlLabel
              key={item.key}
              control={<Checkbox defaultChecked name="gilad" />}
              label={item?.name}
            />
          ))}
        </FormGroup>
      </Paper>

      {/* Size Filter */}
      <Typography variant="h6" gutterBottom className={classes.sectionHeader}>
        Beden
      </Typography>
      <Paper elevation={0} className={classes.section}>
        <FormGroup>
          {size.map((item) => (
            <FormControlLabel
              key={item.key}
              control={<Checkbox defaultChecked name="gilad" />}
              label={item?.name}
            />
          ))}
        </FormGroup>
      </Paper>

      {/* Color Filter */}
      <Typography variant="h6" gutterBottom className={classes.sectionHeader}>
        Renk
      </Typography>
      <Paper elevation={0} className={classes.section}>
        <FormGroup>
          {color.map((item) => (
            <FormControlLabel
              key={item.key}
              control={<Checkbox defaultChecked name="gilad" />}
              label={item?.name}
            />
          ))}
        </FormGroup>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
