import React from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Calculate from "./Calculate.js";
import LiveInfo from "./LiveInfo.js";
import TermsOfUse from "./TermsOfUse.js";
import DevicesAndFunctionals from "./DevicesAndFunctionals.js";
import "../HomeStyle/HomeStyle.css";
const HowItWorks = () => {
  const howItWorksMenu = [
    {
      id: 1,
      name: "მოწყობილობები და ფუნქციონალი",
    },
    {
      id: 2,
      name: "მოხმარების პროცესი",
    },
    {
      id: 3,
      name: "ინფორმაცია ცოცხალ რეჟიმში",
    },
    {
      id: 4,
      name: "გამოთვალე",
    },
  ];
  const [navbarActivation, setNavbarActivation] = useState(1);



  // location.

  return (
    <>
      <div className=" hotItWorks container">
        <div className="title_container">
          <div className="blue_rectangle"></div>
          <h1>როგორ მუშაობს</h1>
        </div>
        <nav>
          <ul>
            {howItWorksMenu.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => {
                    setNavbarActivation(item.id);
                  }}
                  style={
                    navbarActivation === item.id
                      ? { color: "white", backgroundColor: "#0d6efd" }
                      : null
                  }
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </nav>

        {navbarActivation === 1 && <DevicesAndFunctionals />}
        {navbarActivation === 2 && <TermsOfUse />}
        {navbarActivation === 3 && <LiveInfo />}
        {navbarActivation === 4 && <Calculate />}
      </div>
    </>
  );
};

export default HowItWorks;
