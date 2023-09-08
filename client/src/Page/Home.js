import React, { useState } from "react";
import MenuCard from "../components/MenuCard/MenuCard";

import AppCarousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <div className="home">
      <AppCarousel />
      <center>
        <section className="featured-products">
          <h2>Featured Pizzas</h2>
          <MenuCard />
        </section>
      </center>
    </div>
  );
};

export default Home;