import React from "react";
import "./HeaderBottom.css";
import { BsSearch } from "react-icons/bs";

function HeaderBottom() {
  return (
    <div className="flexWrapper">
      <img src="https://www.aig.com/content/experience-fragments/aig/america-canada/us_corporate/en/us_corporate_header/master/_jcr_content/root/responsivegrid/responsivegrid/container_1423107018/image.coreimg.png/1628235494071/aig-logo.png" />

      <div className="navbar">
        <h5>INSURANCE</h5>
        <h5>INVESTMENTS</h5>
        <h5>CLAIMS</h5>
      </div>
      <div className="sideContainer">
        <h5 className="loginSection">LOG IN</h5>
        <BsSearch className="search-icon" size="28px" />
      </div>
    </div>
  );
}

export default HeaderBottom;
