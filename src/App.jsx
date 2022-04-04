import './App.css';
import Header from './components/Header/Header';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
