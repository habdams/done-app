import React from "react";

import { Sidebar } from "./components/Sidebar/Sidebar";
import "./App.scss";

export default function App() {
  return (
    <section className="main">
      <section className="sidebar">
        <Sidebar />
      </section>
      <section className="main"> Main </section>
    </section>
  );
}
