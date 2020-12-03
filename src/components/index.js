import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import ParticlesBubbling from "./Particles";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ParticlesBubbling />
    </div>
  );
};

export default Home;
