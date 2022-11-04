import React from "react";
import Nav from "../../Nav/Nav";
import Movieslider from "../../Movieslider/Movieslider";
import Moviecards from "./Moviecards/Moviecards";
import Footer from "../../Footer/Footer";

export default function Home() {
  return (
    <div className="homebg">
      <Nav />
      <Movieslider />
      <Moviecards />
      <Footer />
    </div>
  );
}
