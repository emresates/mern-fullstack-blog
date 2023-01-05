import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './styles/main.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
