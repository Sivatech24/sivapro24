import React from "react";
import ShootingStars from "../app/pages/shoot";
import NavBar from "../app/pages/navbar";
import ScrollImage from "../app/pages/scrollimage";
import Card from "../app/pages/card";
import MacScroll from "../app/pages/macscroll";
import PageCards from "../app/pages/pagecards";
import EndPage from "../app/pages/endpage";
import ThreeDCardDemo from "../app/pages/3dcard";

const Pages = () => {
  return (
    <div>
      {/* Render the ShootingStars component */}
      <ShootingStars />
      <NavBar />
      <ScrollImage />
      <Card />
      <MacScroll />
      <PageCards />
      <ThreeDCardDemo />
      <EndPage />
      
    </div>
    
  );
};

export default Pages;
