import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skill from './components/Skill';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Skill" element={<Skill />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />}/>
    </Routes>
  </>
  );
}

export default App;

