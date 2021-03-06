import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Header from "../src/components/header/Header";
import { Paper } from "@mui/material";

export default function Index() {
  return (
    <Paper elevation={0}>
      <Header />
    </Paper>
  );
}
