import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  page: React.ComponentType;
}

const UnloggedRouteProtector = ({ page: Page }: Props) => {
  // Обычно информация о сессии хранится в куках и оттуда передаётся в хранилище по типу Redux или MobX,
  // и тогда получение информации о том, авторизован пользователь или нет, выглядит вот так:
  // const { isAuthtorized, status } = useAppSelector((state) => state.auth);
  // однако в данном случае, чтоб не перегружать пример, воспользуемся для передачи данных обычным localStorage
  const isAuthtorized = JSON.parse(localStorage.getItem('auth') || '');
  const location = useLocation()

  // if (status === "pending") {
  //   // Возвращать тут можно что угодно, это делается лишь для того, чтоб пользователь лучше понимал, что происходит
  //   return <div>loading...</div>;
  // }
  
  if (isAuthtorized) return <Page />;
  
  return <Navigate to={"/auth"} state={{from: location.pathname}} />;
};

export default UnloggedRouteProtector;

