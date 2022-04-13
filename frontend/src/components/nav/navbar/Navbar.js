import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../../../../pages/_app";
import logo from "../../../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../../../assets/avatar.jpg";
import NavTypography from "../navTypography/NavTypography";
const Navbar = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Link href="/">
            <Image src={logo} height="40" width="40" />
          </Link>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <NavTypography text="Home" />
            <NavTypography text="About" />
            <NavTypography text="Work" />
            <NavTypography text="Contact" />
            <IconButton
              sx={{ mx: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>

            <Avatar alt="Sohag" src={avatar.src} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
