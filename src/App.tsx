import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthLayout, MainLayout, ProfileLayout, StoreLayout } from './layouts';
import { AboutPage, AuthPage, BagPage, ForgotPasswordPage, MainPage, NotFoundPage, ProductsPage, ProfilePage, PurchasePage } from './pages';

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
          <Route path='bag' element={<BagPage />}/>
          <Route path='purchase' element={<PurchasePage />}/>
        </Route>
        <Route path='/auth' element={<AuthLayout />}>
          <Route index element={<AuthPage />}/>
          <Route path='forgot-password' element={<ForgotPasswordPage />}/> 
        </Route>
        <Route path='/profile' element={<ProfileLayout />}>
          <Route index element={<ProfilePage />}/>
        </Route>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;
