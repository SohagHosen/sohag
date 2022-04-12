import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { indigo } from "@mui/material/colors";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
});
const styles = {
  dynamic: {
    color: "#008AFD",
    fontWeight: "900",
    fontSize: 20,
  },
};
const NavTypography = ({ text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <span style={styles.dynamic}>$&#123;</span>
      <Typography sx={{ mt: 0.5, fontWeight: "bold" }} variant="body1">
        {text}
      </Typography>
      <span style={styles.dynamic}>&#125;</span>
    </Box>
  );
};

export default NavTypography;
