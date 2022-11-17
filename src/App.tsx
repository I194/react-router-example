import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthLayout, MainLayout, ProfileLayout, StoreLayout } from './layouts';
import { AboutPage, AuthPage, BagPage, ForgotPasswordPage, MainPage, NotFoundPage, ProductPage, ProductsPage, ProfilePage, PurchasePage } from './pages';
import { LoggedRouteProtector, UnloggedRouteProtector } from './routeProtectors';

function App() {
  // распространённая ошибка -- указывать путь через '/' во всех роутах -- это запрещено для вложенных роутов,
  // потому что написание начала пути через '/' указывает на то, что он (путь) абсолютный  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<MainPage />}/>
          <Route path='/about' element={<AboutPage />}/>
        </Route>
        <Route path='/store' element={<StoreLayout />}>
          <Route index element={<ProductsPage />}/>
          <Route path=':product' element={<ProductPage />}/>
          <Route path='bag' element={<BagPage />}/>
          <Route path='purchase' element={<PurchasePage />}/>
        </Route>
        <Route path='/auth' element={<LoggedRouteProtector page={AuthLayout} />}>
          <Route index element={<AuthPage />}/>
          <Route path='forgot-password' element={<ForgotPasswordPage />}/> 
        </Route>
        <Route path='/profile' element={<UnloggedRouteProtector page={ProfileLayout} />}>
          <Route index element={<ProfilePage />}/>
        </Route>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;
