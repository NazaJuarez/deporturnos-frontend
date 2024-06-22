import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Reservapage from './pages/Reservapage'
import Registerpage from './pages/Registerpage';
import Loginpage from './pages/Loginpage';
import CanchasPage from './pages/CanchasPage';
import HomePage from './pages/Homepage';
import TurnosPage from './pages/TurnosPage'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage/>}></Route>
          <Route path='/canchas' element={<CanchasPage/>}></Route>
          <Route path='/cancha/:id/turnos' element={<TurnosPage/>}></Route>
          <Route path='/register' element={<Registerpage/>}></Route>
          <Route path='/login' element={<Loginpage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
