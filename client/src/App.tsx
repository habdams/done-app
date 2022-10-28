import React from "react";

import { Sidebar } from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

import "./App.scss";

const user = "Teejay";

export default function App() {
  return (
    <section className="main">
      <section className="sidebar">
        <Sidebar />
      </section>
      <section className="main">
        <section className="main-topbar">
          <Topbar user={user} />
        </section>
        <section className="main-body"></section>
      </section>
    </section>
  );
}
