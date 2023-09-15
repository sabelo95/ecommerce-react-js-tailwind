import { Routes, BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import Clothes from '../Clothes';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import './App.css';
import NavBar from '../../Components/NavBar';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';

const AppRoutes = () => {
  
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="my-account" element={<MyAccount />} />
      <Route path="clothes" element={<Clothes />} />
      <Route path="my-order" element={<MyOrder />} />
      <Route path="my-orders" element={<MyOrders />} />
      <Route path="my-orders/last" element={<MyOrder />} />
      <Route path="my-order/:index" element={<MyOrder />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
      <AppRoutes />
      <NavBar/>
      <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
    
  );
};

export default App;
