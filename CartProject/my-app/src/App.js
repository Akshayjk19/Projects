import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Main from './Components/Main';
import Registration from './Components/Registration';
import CartPage from './Components/CartPage';
import MyCart from './Components/MyCart';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Registration/>} />
    <Route path='/main' element={<Main/>} />
    <Route path='/cart' element={<CartPage/>} />
    <Route path='/mycart' element={<MyCart/>} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
