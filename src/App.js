import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import CartContainer from './components/CartContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <div style={{ background: 'rgb(242, 243, 244)' }}>
            <Routes>
              <Route path='/' element={
                <ItemListContainer greeting="Bienvenido a E-commerce Sergio Niño" />
              } />
              <Route path='/category/:categoryId' element={
                <ItemListContainer greeting="E-commerce Sergio Niño" />
              } />
              <Route path='/item/:id' element={
                <ItemDetailContainer />
              } />
              <Route path='/cart' element={
                <CartContainer />
              } />
              <Route path='*' element={
                <ItemListContainer greeting="Bienvenido a E-commerce Sergio Niño" />
              } />
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;