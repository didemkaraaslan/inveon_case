import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  addColorFilter,
  removeColorFilter,
  addSizeFilter,
  removeSizeFilter,
  addCategoryFilter,
  removeCategoryFilter,
} from "../store/actions/product";

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
  const [checkedCategories, setCheckedCategories] = useState(new Map());
  const [checkedSizes, setCheckedSizes] = useState(new Map());
  const [checkedColors, setCheckedColors] = useState(new Map());

  const handleCategory = (event) => {
    const item = event.target.name;
    const isChecked = event.target.checked;

    let copy = checkedCategories;
    copy.set(item, isChecked);

    setCheckedCategories(copy);
  };

  const handleColor = (event) => {
    const item = event.target.name;
    const isChecked = event.target.checked;

    let copy = checkedColors;
    copy.set(item, isChecked);

    setCheckedColors(copy);
  };

  const handleSize = (event) => {
    const item = event.target.name;
    const isChecked = event.target.checked;

    let copy = checkedSizes;
    copy.set(item, isChecked);

    setCheckedSizes(copy);
  };

  const { title, description, category, size, color } = sidebar;
  const classes = useStyles();
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
              control={
                <Checkbox
                  checked={checkedCategories.get(item.key)}
                  name={item.key}
                  onChange={handleCategory}
                />
              }
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
              control={
                <Checkbox
                  checked={checkedSizes.get(item.key)}
                  name={item.key}
                  onChange={handleSize}
                />
              }
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
              control={
                <Checkbox
                  checked={checkedColors.get(item.key)}
                  name={item.key}
                  onChange={handleColor}
                />
              }
              label={item?.name}
            />
          ))}
        </FormGroup>
      </Paper>
    </Grid>
  );
};

export default Sidebar;
