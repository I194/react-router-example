import React from "react";
import { Outlet, RouteProps } from "react-router-dom";
import BasicLayout from "../BasicLayout/BasicLayout";
import styles from "./styles.module.css";

const StoreLayout = ({...routeProps}: RouteProps) => {
  return (
    <BasicLayout>
      <div className={styles.container}>
        <Outlet />
      </div>
    </BasicLayout>
  )
};

export default StoreLayout;

