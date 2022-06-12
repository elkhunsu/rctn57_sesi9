import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Awards from './pages/Awards';

function App() {
  return (
    <div className="container">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className="routes-content">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/awards' element={<Awards/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
