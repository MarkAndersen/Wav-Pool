import React from "react";
import { Box, Button, ButtonGroup, Grid, Container } from "@mui/material";
import { spacing } from "@mui/system";
import { createTheme } from '@mui/material/styles';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSound from "use-sound";
import picture from "../assets/wav-pool-sm.jpg";
import brrtt from "../assets/brrtt.wav";
import train from "../assets/train.wav";
// import { height } from "@mui/system";

// const styles = {
//   image: {
//     // Height: "99vh",
//     Width: "100%"
//   },

//   pictureBox: {
//     backgroundImage: `url(${picture})`,
//     height: 500,
//     width: "100%"

//   }
// }


export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#484848",
        main: "#212121",
        dark: "#000000",
        contrastText: "#ffffff",
  
      }, 
    },
  });

  const [toot] = useSound(brrtt);
  const [whistle] = useSound(train);

  return (
    <React.Fragment>
      <Navbar />
      <Box
        sx={{ width: "100%", height: 1500, backgroundImage: `url(${picture})` }}
      >
        {/* <img alt="hot tub" src={picture} style={styles.image}></img>
          <br></br> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ButtonGroup
              size="large"
              fullWidth="true"
              variant="outlined"
              aria-label="text button group"

            >
              <Button sx={{ p: 2, m: 2 }} color={theme.pallette} onClick={toot}>
                One
              </Button>
              <Button sx={{ p: 2, m: 2 }} onClick={whistle}>
                Two
              </Button>
              <Button sx={{ p: 2, m: 2 }}>Three</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup
              size="large"
              fullWidth="true"
              variant="outlined"
              aria-label="text button group"
              color={theme.primary}
            >
              <Button sx={{ p: 2, m: 2 }} onClick={toot}>
                One
              </Button>
              <Button sx={{ p: 2, m: 2 }} onClick={whistle}>
                Two
              </Button>
              <Button sx={{ p: 2, m: 2 }}>Three</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </React.Fragment>
  );
}
// Light/Dark Mode?? Custom Palettes?
