import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Container,
  Typography,
  Paper,
} from "@mui/material";
import { spacing } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSound from "use-sound";
import picture from "../assets/wav-pool-sm.jpg";
import brrtt from "../assets/brrtt.wav";
import train from "../assets/train.wav";
import bjird from "../assets/bjird.wav";
import bobbo from "../assets/bobbo1.wav";
import bobbo2 from "../assets/bobbo2.wav";
import bobbo3 from "../assets/bobbo3.wav";
import tunes from "../assets/loontunes.wav"

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#ffffff",
        main: "#f5f5f5",
        dark: "#c2c2c2",
        contrastText: "#000000",
      },
    },
  });

  const [toot] = useSound(brrtt);
  const [whistle] = useSound(train);
  const [bird] = useSound(bjird);
  const [bob1] = useSound(bobbo);
  const [bob2] = useSound(bobbo2);
  const [bob3] = useSound(bobbo3);
  const [looney] = useSound(tunes);

  return (
    <React.Fragment>
      <Container maxWidth="false" disableGutters>
        <Navbar />
        <Box
          sx={{
            maxWidth: "100vw",
            maxHeight: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${picture})`, 
          }}
        >
          {/* <img alt="hot tub" src={picture} style={styles.image}></img>
          <br></br> */}
          {/* <br></br>
          <br></br>
          <br></br> */}
          {/* <br></br>
          <br></br>
          <br></br> */}
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <ButtonGroup
                  size="large"
                  fullWidth="true"
                  variant="outlined"
                  aria-label="text button group"
                >
                  <Button sx={{ m: 4 }} onClick={toot}>
                    <Typography variant="h1">&#128169;</Typography>
                  </Button>
                  <Button sx={{ m: 4 }} onClick={whistle}>
                    <Typography variant="h1">&#128646;</Typography>
                  </Button>
                  <Button sx={{ m: 4 }} onClick={bird}>
                    <Typography variant="h1">&#x1F426;</Typography>
                  </Button>
                </ButtonGroup>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <ButtonGroup
                  size="large"
                  fullWidth="true"
                  variant="outlined"
                  aria-label="text button group"
                >
                  <Button sx={{ m: 4 }} onClick={bob1}>
                    <Typography variant="h1">&#128054;</Typography>
                  </Button>
                  <Button sx={{ m: 4 }} onClick={bob2}>
                    <Typography variant="h1">&#128021;</Typography>
                  </Button>
                  <Button sx={{ m: 4 }} onClick={bob3}>
                    <Typography variant="h1">&#128054;</Typography>
                  </Button>
                </ButtonGroup>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <ButtonGroup
                  size="large"
                  fullWidth="true"
                  variant="outlined"
                  aria-label="text button group"
                >
                  <Button sx={{ m: 4 }} onClick={bob1}>
                    <Typography variant="h1">&#128054;</Typography>
                  </Button>
                  <Button sx={{ m: 4 }} onClick={bob2}>
                    <Typography variant="h1">&#128021;</Typography>
                  </Button>
                  <Button sx={{ m: 4 }} onClick={bob3}>
                    <Typography variant="h1">&#128054;</Typography>
                  </Button>
                </ButtonGroup>
              </ThemeProvider>
            </Grid>
            <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <ButtonGroup
                  size="large"
                  fullWidth="true"
                  variant="outlined"
                  aria-label="text button group"
                >
                  <Button sx={{ m: 4 }} onClick={bob1}>
                    <Typography variant="h1">&#128054;</Typography>
                  </Button>
                  <Button sx={{ m: 4 }} onClick={bob2}>
                    <Typography variant="h1">&#128021;</Typography>
                  </Button>
                  <Button sx={{ m: 4 }} onClick={bob3}>
                    <Typography variant="h1">&#128054;</Typography>
                  </Button>
                </ButtonGroup>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Box>

        <Footer />
      </Container>
    </React.Fragment>
  );
}
// Light/Dark Mode?? Custom Palettes?
