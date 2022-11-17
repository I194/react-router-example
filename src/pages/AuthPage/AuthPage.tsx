import React from "react";
import { SetAuthButton } from "../../components";
import styles from "./styles.module.css";

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <h2>Auth Page</h2>
      <SetAuthButton type='auth' />
    </div>
  )
};

export default AuthPage;

