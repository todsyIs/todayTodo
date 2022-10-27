import React from "react";
import RoundBtn from "../RoundBtn/RoundBtn";
import MainBtn from "../MainBtn/MainBtn";
import { Link } from "react-router-dom";

const Footer = ({ link }) => {
  return (
    <footer className="flex items-center  justify-end mx-4  pb-12 ">
      <Link to={link}>
        <RoundBtn />
      </Link>
    </footer>
  );
};

export default Footer;
