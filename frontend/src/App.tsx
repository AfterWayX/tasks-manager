import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Tasks from "./pages/Tasks";
import Home from "./pages/Home";
import logo from "./assets/logo.svg"
import NavHeader from "./components/NavHeader";
import About from "./pages/About";
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="container flex justify-between px-3 items-center border-b border-gray-300">
          <Link to="/">
            <img src={logo} alt="site logo" className="w-10 h-10" />
          </Link>
          <NavHeader />
        </nav>

        <Routes>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}