import { createTheme } from "@mui/material/styles";
import {
  amber,
  blue,
  blueGrey,
  deepOrange,
  green,
  grey,
  indigo,
  purple,
  red,
  yellow,
} from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            // light: will be calculated from palette.primary.main,
            main: blueGrey[900],
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          // divider: blueGrey[200],
          background: {
            default: blueGrey[900],
            paper: blueGrey[900],
          },
          text: {
            primary: blueGrey[900],
            secondary: blueGrey[900],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: red[900],
          },
          background: {
            default: yellow[900],
            paper: yellow[900],
          },
          text: {
            primary: purple[900],
            secondary: indigo[900],
          },
        }),
  },
});

export default getDesignTokens;
