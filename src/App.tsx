import React from 'react';
import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainLayout, StoreLayout } from './layouts';
import { AboutPage, BagPage, MainPage, NotFoundPage, ProductsPage, PurchasePage } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<MainPage />}/>
          <Route path='/about' element={<AboutPage />}/>
        </Route>
        <Route path='/store' element={<StoreLayout />}>
          <Route path='products' element={<ProductsPage />}/>
          <Route path='bag' element={<BagPage />}/>
          <Route path='purchase' element={<PurchasePage />}/>
        </Route>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;
