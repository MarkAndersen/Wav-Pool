import React from "react";
import { Box, Button, ButtonGroup, Paper,Container } from "@mui/material";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSound from "use-sound";
import picture from "../assets/wav-pool-sm.jpg";
import brrtt from "../assets/brrtt.wav";
import train from "../assets/train.wav";

const styles = {
  image: {
    Height: "100vh",
    width: "100vw"
  }
}

export default function Home() {
    const [toot] = useSound(brrtt);
    const [whistle] = useSound(train);

  return (
    <React.Fragment>
      <Navbar />
          <img alt="hot tub" src={picture} style={styles.image}></img>
          <br></br>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={toot}>One</Button>
          <Button onClick={whistle}>Two</Button>
          <Button>Three</Button>
        </ButtonGroup> 
      <Footer />
      
    </React.Fragment>
  );
}
// Light/Dark Mode?? Custom Palettes?
