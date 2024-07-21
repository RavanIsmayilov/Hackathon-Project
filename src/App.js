import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './home/home';
import Product from './product/product';
import UseCases from './usecases/usecases';
import Qkd from './qkd/qkd';
import Bank from './bank/bank';


function App() {
  return (
<>
    <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/usecases' element={<UseCases/>} />
            <Route path='/qkd' element={<Qkd/>} />
            <Route path='/bank' element={<Bank/>} />
          </Routes>
      </BrowserRouter>
</>
  );
}

export default App;
