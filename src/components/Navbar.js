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
  fontSize: '2.0rem',
  '@media (min-width: 600px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.0rem',
  },
    fontFamily: 'Luckiest Guy',
    color: '#b2dfdb',
 
}


export default function Navbar() {
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'center' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
            >
              Mark's Wav Pool
            </Typography>
          </Box>
        </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
}
