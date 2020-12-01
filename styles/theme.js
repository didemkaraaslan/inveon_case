import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
