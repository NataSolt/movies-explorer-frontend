import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab">
      <a className="navtab__link" href="#about-project">
      <div className="navtab__text">О проекте</div>
      </a>
      <a className="navtab__link" href="#techs">
        <div className="navtab__text">Технологии</div>
      </a>
      <a className="navtab__link" href="#student">
      <div className="navtab__text">Студент</div>
      </a>
    </section>
  );
}

export default NavTab;
