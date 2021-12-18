import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button, ButtonGroup } from "@mui/material";
import useSound from "use-sound";
import brrtt from '../sounds/brrtt.wav';


export default function Home() {
const [toot] = useSound(brrtt);
  
  
  return (
    <div>
      {/* header has title, log in feature to follow */}
      <Navbar />
      <div>
        {/* background image */}
        {/* button group, imported component or hardcoded? May have use for multiple layouts utilizing this layout*/}
        <img alt="placeholder" src="https://via.placeholder.com/500"></img>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={toot}>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <Footer />
    </div>
  );
}
// Light/Dark Mode?? Custom Palettes?
