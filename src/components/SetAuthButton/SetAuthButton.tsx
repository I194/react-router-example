import React from "react";
import styles from "./styles.module.css";

interface Props {
  type: 'auth' | 'unauth';
}

const SetAuthButton = ({type}: Props) => {
  const onClick = () => {
    if (type === 'auth') {
      localStorage.setItem('auth', JSON.stringify(true));
    } else {
      localStorage.setItem('auth', JSON.stringify(false));
    };
    window.location.reload();
  };

  return (
    <button 
      className={styles.container}
      style={{backgroundColor: type === 'auth' ? 'limegreen' : 'darkred'}}
      onClick={onClick}
    >
      { type === 'auth' ? 'login' : 'logout' }
    </button>
  );
};

export default SetAuthButton;

