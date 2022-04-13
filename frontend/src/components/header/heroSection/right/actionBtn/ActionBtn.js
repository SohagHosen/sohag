import React from "react";
import styles from "./actionBtn.module.css";
const ActionBtn = ({ color }) => {
  return <div className={styles.main} style={{ background: color }}></div>;
};

export default ActionBtn;
