import React from "react";

import { CheckSquare } from "phosphor-react";

import "./Sidebar.scss";

export function Sidebar() {
  return (
    <section className="sidebar">
      <img src="#" alt="logo for done app" className="sidebar-logo" />
      <p className="sidebar-sub">Track how much you do in a day</p>

      <span className="sidebar-point">
        <CheckSquare />
        <p> Record little wins </p>
      </span>

      <span className="sidebar-point">
        <CheckSquare />
        <p> Be productive </p>
      </span>
    </section>
  );
}
