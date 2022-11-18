import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  page: React.ComponentType;
}

const LoggedRouteProtector = ({ page: Page }: Props) => {
  // Обычно информация о правах пользователя находится в хранилище по типу Redux или MobX,
  // и тогда получение информации о том, авторизован пользователь или нет, выглядит, например, вот так:
  // const { isAuthtorized, status } = useAppSelector((state) => state.auth);
  // однако в данном случае, чтоб не перегружать пример, воспользуемся для передачи данных обычным localStorage
  const isAuthtorized = JSON.parse(localStorage.getItem('auth') || '');
  const locationState = useLocation().state as { from: string };

  console.log(localStorage, isAuthtorized)

  // if (status === "pending") {
  //   // Возвращать тут можно что угодно, это делается лишь для того, чтоб пользователь лучше понимал, что происходит
  //   return <div>loading...</div>;
  // }

  if (!isAuthtorized) return <Page />;
  // если же пользователь авторизован, он будет перенаправлен на страницу откуда пришёл (если есть информация о ней),
  // или на главную страницу
  return <Navigate to={`${locationState?.from ? locationState.from : '/'}`}/>;
};

export default LoggedRouteProtector;

