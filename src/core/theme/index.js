import React from "react";

import { defaultDarkTheme } from "./dark";
import { defaultLightTheme } from "./light";
import { createTheme, ThemeProvider as Provider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { orange } from "@mui/material/colors";

const ThemeProvider = ({ children }) => {
  const { bgColor } = useSelector((item) => item.theme);
  const theme = createTheme({
    palette: {
      mode: !bgColor ? "light" : "dark",
    },
  });

  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
