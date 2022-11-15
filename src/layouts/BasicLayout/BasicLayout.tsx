import React from "react";
import { NavButton } from "../../components";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

const BasicLayout = ({children}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.navRow}>
        <NavButton 
          to="/"
          label="Main Page"
        />
        <NavButton 
          to="/store"
          label="Store"
        />
        <NavButton 
          to="/profile"
          label="Profile"
        />
      </div>
      { children }
    </div>
  );
}

export default BasicLayout;

