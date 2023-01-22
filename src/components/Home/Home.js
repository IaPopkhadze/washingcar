import React from "react";
import "./HomeStyle/HomeStyle.css";
import HowItWorks from "./HowItWorks/HowItWorks";
import OurTechnologies from "./OurTechnologies.js";
const Home = () => {
  return (
    <div className="home">
      <div
        className="home_background_image"
        style={{
          backgroundImage: ` url('${`./images/washcar.png`}')`,
          backgroundColor: `rgba(0,0,0,0.5)`,
          backgroundBlendMode: "darken",
        }}
      ></div>

      <OurTechnologies />
      <HowItWorks />
    </div>
  );
};
//  style={{ backgroundImage: `url('${`./images/washcar.png`}')` }}
export default Home;
