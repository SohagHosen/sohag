import { Box } from "@mui/material";
import { useTheme } from "@mui/styles";
import React from "react";
import ActionBtn from "./actionBtn/ActionBtn";
import MyCodeBlock from "./myCodeBlock/MyCodeBlock";
import styles from "./RightContent.module.css";
const RightContent = () => {
  const text = `class Greeting extends React.Component {
  render() {
    return (
      <div className="box">
        <h2>Hello Human Friend!!!</h2>
        <p>We are so glad to have you here.</p>
      </div>
    );
  }
}

ReactDOM.render(<Greeting />, document.getElementById("app"));`;

  const theme = useTheme();
  console.log(theme.palette.mode);
  return (
    <Box className={styles.main}>
      <Box
        className={styles.editor}
        sx={{
          background: theme.palette.mode === "dark" ? "#282C34" : "#FAFAFA",
        }}
      >
        <Box className={styles.controls}>
          <ActionBtn color="#FF5F56" />
          <ActionBtn color="#FFBD2E" />
          <ActionBtn color="#27C93F" />
        </Box>
        <Box className={styles.codeContainer}>
          <MyCodeBlock text={text} />
        </Box>
      </Box>
    </Box>
  );
};

export default RightContent;
