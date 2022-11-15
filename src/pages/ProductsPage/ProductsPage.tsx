import React from "react";
import { Product } from "../../components";
import styles from "./styles.module.css";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <h2>Products Page</h2>
      <Product name='Green scarf' phrase="For a showy winter" price={5} />
      <Product name='Red gloves' phrase="For a showy winter" price={5} />
      <Product name='Red hat' phrase="For a showy winter" price={5} />
    </div>
  )
};

export default ProductsPage;

