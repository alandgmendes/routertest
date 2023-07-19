import { createTheme } from "@mui/material";

export const colors = {
  green: {
    100: "#e2e2e2",
    200: "#c5c5c5",
    300: "#a5a5a5",
    400: "#8a8a8a",
    500: "#4a4a4a",
    600: "#3c3c3c",
    700: "#2c2c2c",
    800: "#1a1a1a",
    900: "#0c0c0c",
  },
  lightBlue: {
    100: "#e1e1e1",
    200: "#c8c8c8",
    300: "#a3a3a3",
    400: "#7f7f7f",
    500: "#525252",
    600: "#404040",
    700: "#2b2b2b",
    800: "#1a1a1a",
    900: "#0b0b0b",
  },
  input: {
    100: "#d9d9d9",
    200: "#aeaeae",
    300: "#808080",
    400: "#535353",
    500: "#1d1d1d",
    600: "#1d1d1d",
    700: "#1d1d1d",
    800: "#1d1d1d",
    900: "#0c0c0c",
  },
  background: {
    100: "#d4d4d4",
    200: "#a9a9a9",
    300: "#7f7f7f",
    400: "#525252",
    500: "#212121",
    600: "#1d1d1d",
    700: "#1d1d1d",
    800: "#0c0c0c",
    900: "#060606",
  },
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
        main: colors.green[500],
    },
    background: {
      default: "#1f1d2c",
    },
  },
  typography: {
    fontFamily: ["sans-serif"].join(" "),
  },
});
