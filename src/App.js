import logo from './logo.svg';
import './App.css';
import MyState from './context/MyState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <MyState>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>

          </Routes>
        </BrowserRouter>
      </MyState>
    </div>
  );
}

export default App;
