import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// Components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import SmallApps from './pages/SmallApps/SmallApps';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="apps" element={<SmallApps />} />
      </Routes>
    </>
  );
};

export default App;
