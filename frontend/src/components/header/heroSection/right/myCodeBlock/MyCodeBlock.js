import { useTheme } from "@mui/styles";
import React from "react";
import {
  atomOneDark,
  atomOneLight,
  CodeBlock,
  dracula,
} from "react-code-blocks";

const MyCodeBlock = ({ text }) => {
  const theme = useTheme();
  return (
    <CodeBlock
      text={text}
      language="jsx"
      showLineNumbers={true}
      theme={theme.palette.mode === "light" ? atomOneLight : atomOneDark}
    />
  );
};

export default MyCodeBlock;
