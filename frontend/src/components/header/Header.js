import { Container } from "@mui/material";
import React from "react";
import Navbar from "../nav/navbar/Navbar";
import HeroSection from "./heroSection/HeroSection";
const Header = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <HeroSection />
    </Container>
  );
};

export default Header;
