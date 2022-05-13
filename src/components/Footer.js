import React from "react";
import { cyan, teal } from '@mui/material/colors';
import { AppBar, Box, createTheme, ThemeProvider, Toolbar, Typography } from "@mui/material";



const theme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: teal[100],
    },
  },
});

theme.typography.h6 = {
  fontSize: '1.2rem',
  '@media (min-width: 600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
    fontFamily: 'Luckiest Guy',
    color: 'white',
 
}

export default function Footer() {
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'center' }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "flex", md: "flex" }}}
              >
                &#169; Mark Andersen 2022
              </Typography>
            </Box>
          </Toolbar>
      </AppBar>
      </ThemeProvider>
    )
};