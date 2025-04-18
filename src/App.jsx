import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import CheckOut from './Pages/CheckOut';
import Order from './Pages/Order';
import Filter from './Pages/Filter';
import ProductDetail from './Pages/ProductDetail';

const App = () => {
  const [order, setOrder] = useState(null)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/shop' element= {<Shop />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/checkout' element={<CheckOut setOrder={setOrder} />} />
        <Route path='/order' element={<Order order={order} />} />
        <Route path = "/product/:id" element={<ProductDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;