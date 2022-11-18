import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

interface NavButtonProps {
  to: string;
  label: string;
}

const NavButton = ({to, label}: NavButtonProps) => {
  const navigate = useNavigate();

  const onNavBtnClick = () => {
    navigate(to);
  };

  return (
    <button className={styles.conatiner} onClick={onNavBtnClick}>
      { label }
    </button>
  );
};

export default NavButton;

