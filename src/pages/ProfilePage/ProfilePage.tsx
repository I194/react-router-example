import React from "react";
import { SetAuthButton } from "../../components";
import styles from "./styles.module.css";

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <h2>Profile Page</h2>
      <SetAuthButton type='unauth' />
    </div>
  )
};

export default ProfilePage;

