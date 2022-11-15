import React from "react";
import { useLocation } from "react-router-dom";
import { BackNavButton } from "../../components";
import styles from "./styles.module.css";

const ProductPage = () => {

  const location = useLocation();

  const { name, phrase, price } = location.state;
  
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <h2>Product Page</h2>
      </div>
      <div className={styles.productInfo}>
        <h2>{ name }</h2>
        <h4>{ phrase }</h4>
        <h3>${ price }</h3>
      </div>
      <BackNavButton />
    </div>
  )
};

export default ProductPage;

