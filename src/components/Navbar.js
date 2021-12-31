import React from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    // Login/Logout Button Title definitely an 80s themed font
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
  );
}
