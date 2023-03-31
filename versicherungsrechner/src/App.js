import Home from "./sites/Home";
import Navbar from "./components/Navbar";
import About from "./sites/About";
import Auto from "./sites/Auto";
import Hausrat from "./sites/Hausrat";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auto" element={<Auto />} />
          <Route path="/hausrat" element={<Hausrat />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
