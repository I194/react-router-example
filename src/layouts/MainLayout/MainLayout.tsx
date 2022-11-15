import React from "react";
import { Outlet, RouteProps } from "react-router-dom";
import styles from "./styles.module.css";

const MainLayout = ({...routeProps}: RouteProps) => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
};

export default MainLayout;

