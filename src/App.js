
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';
import Search from './Components/Search';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
