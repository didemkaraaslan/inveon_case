import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, Theme } from "@material-ui/core/styles";
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
} from "../store/actions/filterActions";

const useStyles = makeStyles((theme: Theme) => ({
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

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();

  const { colors, sizes, categories } = useSelector<State, Filter>(
    (state) => state.filters
  );

  const handleCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const item: CategoriesType = event.target.name as CategoriesType;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch(addCategoryFilter(item));
    } else {
      dispatch(removeCategoryFilter(item));
    }
  };

  const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const item: ColorsType = event.target.name as ColorsType;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch(addColorFilter(item));
    } else {
      dispatch(removeColorFilter(item));
    }
  };

  const handleSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    const item: SizesType = event.target.name as SizesType;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch(addSizeFilter(item));
    } else {
      dispatch(removeSizeFilter(item));
    }
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
                  checked={categories.includes(item.key as CategoriesType)}
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
                  checked={sizes.includes(item.key as SizesType)}
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
                  checked={colors.includes(item.key as ColorsType)}
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
