import React from "react";
import "./styles.css";
import MenuProvider from "react-flexible-sliding-menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Sidebar,
  Movieslider,
  Signin,
  Signup,
  Home,
  Moviecards,
  BondCollection,
  MovieBoxSets,
  NewToBuy,
  NewToRent,
  PreOrder,
  OfficialFilmCharts,
  Browse,
  AtoZ,
  RedeemVoucher,
  SkyStorePremiere,
  SkyVIPGift,
  StorePicks,
  TVBoxSets,
  UnderE3,
  UnderE4,
  UnderE5,
  All,
  Comedy,
  Drama,
  Kids,
  MostPopular,
  NewToStore,
  Details
} from "./components";

export default function App() {
  return (
    <Router>
      <MenuProvider MenuComponent={Sidebar}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movieslider" element={<Movieslider />} />
          <Route path="/Moviecards" element={<Moviecards />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/BondCollection" element={<BondCollection />} />
          <Route path="/MovieBoxSets" element={<MovieBoxSets />} />
          <Route path="/NewToBuy" element={<NewToBuy />} />
          <Route path="/NewToRent" element={<NewToRent />} />
          <Route path="/PreOrder" element={<PreOrder />} />
          <Route path="/OfficialFilmCharts" element={<OfficialFilmCharts />} />
          <Route path="/Browse" element={<Browse />} />
          <Route path="/AtoZ" element={<AtoZ />} />

          <Route path="/RedeemVoucher" element={<RedeemVoucher />} />

          <Route path="/SkyStorePremiere" element={<SkyStorePremiere />} />

          <Route path="/SkyVIPGift" element={<SkyVIPGift />} />

          <Route path="/StorePicks" element={<StorePicks />} />
          <Route path="/TVBoxSets" element={<TVBoxSets />} />
          <Route path="/UnderE3" element={<UnderE3 />} />
          <Route path="/UnderE4" element={<UnderE4 />} />
          <Route path="/UnderE5" element={<UnderE5 />} />

          <Route path="/All" element={<All />} />
          <Route path="/Comedy" element={<Comedy />} />
          <Route path="/Drama" element={<Drama />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path="/MostPopular" element={<MostPopular />} />
          <Route path="/NewToStore" element={<NewToStore />} />

          <Route path="/Details/:id" element={<Details />} />

          <Route path="/NewToRent/Details/:id" element={<Details />} />
          <Route path="/NewToBuy/Details/:id" element={<Details />} />
          <Route path="/PreOrder/Details/:id" element={<Details />} />
          <Route path="/MovieBoxSets/Details/:id" element={<Details />} />
          <Route path="/OfficialFilmCharts/Details/:id" element={<Details />} />
          <Route path="/BondCollection/Details/:id" element={<Details />} />
          <Route path="/Browse/Details/:id" element={<Details />} />
          <Route path="/AtoZ/Details/:id" element={<Details />} />

          <Route path="/SkyStorePremiere/Details/:id" element={<Details />} />

          <Route path="/StorePicks/Details/:id" element={<Details />} />
          <Route path="/TVBoxSets/Details/:id" element={<Details />} />
          <Route path="/UnderE3/Details/:id" element={<Details />} />
          <Route path="/UnderE4/Details/:id" element={<Details />} />
          <Route path="/UnderE5/Details/:id" element={<Details />} />

          <Route path="/SkyVIPGift/Details/:id" element={<Details />} />

          <Route path="/All/Details/:id" element={<Details />} />
          <Route path="/Comedy/Details/:id" element={<Details />} />
          <Route path="/Drama/Details/:id" element={<Details />} />
          <Route path="/Kids/Details/:id" element={<Details />} />
          <Route path="/MostPopular/Details/:id" element={<Details />} />
          <Route path="/NewToStore/Details/:id" element={<Details />} />
        </Routes>
      </MenuProvider>
    </Router>
  );
}
