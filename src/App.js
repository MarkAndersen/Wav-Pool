import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: 'Luckiest Guy',
    fontSize: 15,
  },
});


export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <div>
        <Home />
      </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

