import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// install and import useSound

export default function Home() {
  return (
    <div>
      {/* header has title, log in feature to follow */}
      <Navbar />
      <div>
        {/* background image */}
        {/* button group, imported component or hardcoded? May have use for multiple layouts utilizing this layout*/}
        <img alt="placeholder" src="https://via.placeholder.com/500"></img>
      </div>
      <Footer />
    </div>
  );
}
// Light/Dark Mode?? Custom Palettes?
