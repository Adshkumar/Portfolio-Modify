import React from "react";
import Hero from "../components/hero";
import LowerHero from "../components/lowerhero";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <LowerHero />
    </div>
  );
};

export default Home;