import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import RightContent from "./right/RightContent";

const HeroSection = () => {
  return (
    <Grid container sx={{ mt: 8 }}>
      <Grid item xs={12} sm={6}>
        1
      </Grid>
      <Grid item xs={12} sm={6}>
        <RightContent />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
