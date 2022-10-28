import React from "react";
import "./Topbar.scss";

export type TopbarProp = {
  user: React.ReactNode;
};

export default function Topbar({ user }: TopbarProp) {
  return (
    <header className="topbar">
      <h1 className="topbar-user">Hello, {user}</h1>
      <h3 className="topbar-time">TIME</h3>
    </header>
  );
}
