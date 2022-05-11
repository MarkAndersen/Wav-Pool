import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
export default function Footer() {
    return (
        <AppBar position="static">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'center' }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
              >
                &#169; Mark Andersen 2021
              </Typography>
            </Box>
          </Toolbar>
      </AppBar>
    )
};