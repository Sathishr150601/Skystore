import React from "react";
import "../MenuItem.css";
import Nav from "../../Nav/Nav";
import Moviecards from "../Home/Moviecards/Moviecards";
import Footer from "../../Footer/Footer";

export default function OfficialFilmCharts() {
  return (
    <div className="OfficialFilmCharts">
      <div className="default">
        <Nav />
      </div>
      <Moviecards />
      <Footer />
    </div>
  );
}
