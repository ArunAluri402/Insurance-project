import React from "react";
import "./MainSection.css";

function MainSection() {
  return <div className="mainContainer">
      <img className="heroimg" src="https://www.aig.com/content/aig/america-canada/us_corporate/en/individual/_jcr_content/root/responsivegrid/responsivegrid/container_263414574_/teaserflex_copy_1501.coreimg.90.1400.png/1648567030992/2021-annual-report-peter-zaffino-hero.png" />

      <div className="heroContentWrapper">
          <h1>2021 Annual Report</h1>
          <p>Discover new potential and reimagine what AIG can do for you.</p>
          <button type="submit">READ THE ANNUAL REPORT</button>
      </div>
  </div>;
}

export default MainSection;
