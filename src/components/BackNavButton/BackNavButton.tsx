import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';

const BackNavButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <button className={styles.container} onClick={onClick}>
      Go back
    </button>
  );
};

export default BackNavButton;

