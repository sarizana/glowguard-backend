import React from "react";
import Navbar from "./Navbar";
import FavoritesSection from "../pages/favorites/components/Favorites";
import Footer from "./Footer";

const Favorites = () => {
  return (
    <div className="favorites-container">
      <Navbar />
      <FavoritesSection />
      <Footer />
    </div>
  );
};

export default Favorites;
