import React from "react";

import { CheckSquare } from "phosphor-react";

import "./Sidebar.scss";

const logo: string = require("./images/logo.svg").default;

export function Sidebar() {
  return (
    <section className="sidebar">
      <img src={logo} alt="logo for done app" className="sidebar-logo" />
      <p className="sidebar-sub">Track how much you do in a day</p>

      <span className="sidebar-point">
        <CheckSquare weight="bold" size={24} />
        <p> Record little wins </p>
      </span>

      <span className="sidebar-point">
        <CheckSquare weight="bold" size={24} />
        <p> Be productive </p>
      </span>
    </section>
  );
}
