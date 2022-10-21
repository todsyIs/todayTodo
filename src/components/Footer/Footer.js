import React from "react";
import RoundBtn from "../RoundBtn/RoundBtn";
import MainBtn from "../MainBtn/MainBtn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between mx-4  pb-12 ">
      <Link to="/about">
        <RoundBtn />
      </Link>
      <MainBtn />
    </footer>
  );
};

export default Footer;
