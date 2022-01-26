import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Grettings from './components/Greetings';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2 className="centralize">Welcome to my greeting app</h2>} />
        <Route path="greetings" element={<Grettings />} />
      </Routes>
    </Router>
  );
}

export default App;
