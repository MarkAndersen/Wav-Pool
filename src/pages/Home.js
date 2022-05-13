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
import picture from "../assets/images/wav-pool-sm.jpg";
import btnPicture from "../assets/images/seal.jpg";
import btnPicture2 from "../assets/images/looney.gif";
import btnPicture3 from "../assets/images/bird.jpg";
import btnPicture4 from "../assets/images/train.jpg";
import btnPicture5 from "../assets/images/toot.jpg";
import btnPicture6 from "../assets/images/bullfrog.jpg";
import btnPicture7 from "../assets/images/bob1.jpg";
import btnPicture8 from "../assets/images/bob2.jpg";
import btnPicture9 from "../assets/images/bob3.jpg";
import btnPicture10 from "../assets/images/horse1.jpg";
import btnPicture11 from "../assets/images/2horses.jpg";
import btnPicture12 from "../assets/images/burrp.png";
import brrtt from "../assets/sounds/brrtt.wav";
import train from "../assets/sounds/train.wav";
import bjird from "../assets/sounds/bjird.wav";
import bobbo from "../assets/sounds/bobbo1.wav";
import bobbo2 from "../assets/sounds/bobbo2.wav";
import bobbo3 from "../assets/sounds/bobbo3.wav";
import tunes from "../assets/sounds/loontunes.wav";
import kiss from "../assets/sounds/seal.wav";
import frog from "../assets/sounds/ribbit.wav";
import neigh from "../assets/sounds/neigh.wav";
import clops from "../assets/sounds/clop.wav";
import leBurp from "../assets/sounds/burp.wav";

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
  const [seal] = useSound(kiss);
  const [forg] = useSound(frog);
  const [horse] = useSound(neigh);
  const [horses] = useSound(clops);
  const [burps] = useSound(leBurp);

  return (
    <React.Fragment>
      <Container
        sx={{ backgroundColor: "Blue" }}
        maxWidth="false"
        disableGutters
      >
        <Navbar />
        <Box
          sx={{
            maxWidth: "100vw",
            minHeight: "100vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${picture})`,
          }}
        >
          <Grid container>
            <Grid item xs={12}>
              <ButtonGroup
                size="large"
                fullWidth="true"
                variant="outlined"
                aria-label="text button group"
              >
                <Button
                  sx={{
                    mt: 5,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture5})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "18vh",
                      md: "27vh",
                      lg: "40vh",
                    },
                  }}
                  onClick={toot}
                ></Button>
                <Button
                  sx={{
                    mt: 5,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "18vh",
                      md: "27vh",
                      lg: "40vh",
                    },
                  }}
                  onClick={whistle}
                ></Button>
                <Button
                  sx={{
                    mt: 5,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "18vh",
                      md: "27vh",
                      lg: "40vh",
                    },
                  }}
                  onClick={bird}
                ></Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup
                size="large"
                fullWidth="true"
                variant="outlined"
                aria-label="text button group"
              >
                <Button
                  sx={{
                    mt: 5,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture7})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "18vh",
                      md: "27vh",
                      lg: "40vh",
                    },
                  }}
                  onClick={bob1}
                ></Button>
                <Button
                  sx={{
                    mt: 5,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture8})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "18vh",
                      md: "27vh",
                      lg: "40vh",
                    },
                  }}
                  onClick={bob2}
                ></Button>
                <Button
                  sx={{
                    mt: 5,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture9})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "18vh",
                      md: "27vh",
                      lg: "40vh",
                    },
                  }}
                  onClick={bob3}
                ></Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup
                size="large"
                fullWidth="true"
                variant="outlined"
                aria-label="text button group"
              >
                <Button
                  sx={{
                    mt: 5,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                  }}
                  onClick={looney}
                ></Button>
                <Button
                  sx={{
                    mt: 5,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                  }}
                  onClick={seal}
                ></Button>
                <Button
                  sx={{
                    mt: 5,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture12})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "18vh",
                      md: "27vh",
                      lg: "40vh",
                    },
                  }}
                  onClick={burps}
                ></Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup
                size="large"
                fullWidth="true"
                variant="outlined"
                aria-label="text button group"
              >
                <Button
                  sx={{
                    mt: 5,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture10})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "18vh",
                      md: "27vh",
                      lg: "40vh",
                    },
                  }}
                  onClick={horse}
                ></Button>
                <Button
                  sx={{
                    mt: 5,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture11})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "18vh",
                      md: "27vh",
                      lg: "40vh",
                    },
                  }}
                  onClick={horses}
                ></Button>
                <Button
                  sx={{
                    mt: 5,
                    mx: "auto",
                    backgroundImage: `url(${btnPicture6})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: "70%",
                    minHeight: {
                      xs: "18vh",
                      md: "27vh",
                      lg: "40vh",
                    },
                  }}
                  onClick={forg}
                ></Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Container>
    </React.Fragment>
  );
}
