import React from "react";
import "./HomeStyle/HomeStyle.css";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
const HomeNavbar = () => {
  const [highlightNavbar, sethighlightNavbar] = useState(false);
  const navbar = [
    {
      id: 1,
      name: "ბიზნესისთვის",
    },
    {
      id: 2,
      name: "მძღოლებისთვის",
    },
    {
      id: 3,
      name: "პროექტი",
    },
    {
      id: 4,
      name: "კონტაქტი",
    },
    {
      id: 5,
      name: " 599950710",
      icon: true,
    },
  ];
  return (
    <div className="homeNavbar">
      <div className="container navbar_container">
        <div className="washing_card_logo">WashingCard</div>
        <div className="navbar_menu">
          <ul>
            {navbar.map((listItem) => {
              return (
                <li
                  className={listItem.icon ? 'phoneNumber': null}
                  onClick={() => sethighlightNavbar(listItem.id)}
                  style={
                    highlightNavbar === listItem.id ? { color: "black" } : null
                  }
                  key={listItem.id}
                >
                  {listItem.icon ? <FiPhoneCall /> : null}
                  {listItem.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
