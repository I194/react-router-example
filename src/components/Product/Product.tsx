import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

interface Props {
  name: string;
  phrase?: string;
  price: number;
}

const Product = ({ name, phrase, price }: Props) => {

  const navigate = useNavigate();

  // бывает встречается ошибка при генерации ссылок по данным, например, с бэкенда -- 
  // когда для создания URL используется какое то из полей, которое не обязано быть уникальным,
  // и тогда вы получите одинаковые ссылки там, где были нужны разные, и это сломает вам навигацию
  // Например, тут для создания ссылки используется поле name, и если оно вдруг повторится у двух компонентов Product,
  // то навигация для одного из них будет сломана и вы никогда не перейдёте на страницу с ним.
  const onProductClick = () => {
    navigate(name.trim().replaceAll(' ', '_'), {state: {name, phrase, price}});
  };

  return (
    <div className={styles.container} onClick={onProductClick}>
      <h2>{ name }</h2>
      <h4>{ phrase }</h4>
      <h3>${ price }</h3>
    </div>
  );
};

export default Product;

