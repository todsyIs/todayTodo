import React from "react";
import RoundBtn from "../RoundBtn/RoundBtn";
import MainBtn from "../MainBtn/MainBtn";
import { Link } from "react-router-dom";

const Footer = ({ link }) => {
  return (
    <footer className="flex items-center justify-between mx-4  pb-12 ">
      <Link to={link}>
        <RoundBtn />
      </Link>
      <MainBtn />
    </footer>
  );
};

export default Footer;
