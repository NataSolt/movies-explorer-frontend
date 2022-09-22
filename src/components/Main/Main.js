import React from "react";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
// import AboutMe from "./AboutMe/AboutMe";
// import Portfolio from "./Portfolio/Portfolio";

// import Techs from "./Techs/Techs";

function Main() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      {/* <Techs />
      <AboutMe />
      <Portfolio />  */}
    </main>
  );
}

export default Main;
