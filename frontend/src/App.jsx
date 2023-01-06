import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './styles/main.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SinglePostPage from './pages/SinglePostPage/SinglePostPage';
import Write from './pages/Write/Write';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="post" element={<SinglePostPage />} />
        <Route path="write" element={<Write />} />
        <Route path="settings" element={<Settings />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
