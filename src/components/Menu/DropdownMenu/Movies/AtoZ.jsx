import React from "react";
import "../MenuItem.css";
import Nav from "../../Nav/Nav";
import Moviecards from "../Home/Moviecards/Moviecards";
import Footer from "../../Footer/Footer";

export default function AtoZ() {
  return (
    <div className="AtoZ">
      <div className="default">
        <Nav />
      </div>
      <Moviecards />
      <Footer />
    </div>
  );
}
