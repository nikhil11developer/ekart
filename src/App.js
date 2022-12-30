import logo from './logo.svg';
import './App.css';
import MyState from './context/MyState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <MyState>
        
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </MyState>
    </div>
  );
}

export default App;
