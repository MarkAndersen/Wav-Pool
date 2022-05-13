import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";



export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Home />
      </div>
    </React.Fragment>
  );
}

