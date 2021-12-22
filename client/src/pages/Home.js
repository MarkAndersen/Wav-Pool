import React from "react";
import { Box, Button, ButtonGroup, Container, Paper } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSound from "use-sound";
import picture from "../assets/wav-pool-sm.jpg";
import brrtt from "../assets/brrtt.wav";
import train from "../assets/train.wav";
import { height } from "@mui/system";

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
    const [toot] = useSound(brrtt);
    const [whistle] = useSound(train);

  return (
    <React.Fragment>
      <Navbar />
      <Box sx={{ width:"100%", height: 1500, backgroundImage:`url(${picture})`}}>
          {/* <img alt="hot tub" src={picture} style={styles.image}></img>
          <br></br> */}
        <Container>
          <ButtonGroup variant="contained" aria-label="text button group">
            <Button onClick={toot}>One</Button>
            <Button onClick={whistle}>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Container>
      </Box>
      <Footer />
      
    </React.Fragment>
  );
}
// Light/Dark Mode?? Custom Palettes?
