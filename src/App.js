import './App.scss';
import { Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home/Home.js';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
