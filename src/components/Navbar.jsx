import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <nav className="bg-violet-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-xl font-bold flex items-center gap-2">
            <FaTasks /> iTask
          </Link>
          <div className="flex gap-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/about" className="text-white">About</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

const Home = () => (
  <div className="container mx-auto p-4 bg-violet-50 rounded-xl mt-4">
    <h2 className="text-2xl font-bold mb-4 text-violet-900">Welcome to iTask</h2>
    <p className="text-lg text-violet-800">Manage all your tasks in one place efficiently and effectively. Keep track of what needs to be done and never miss a task again.</p>
  </div>
);

const About = () => (
  <div className="container mx-auto p-4 bg-violet-50 rounded-xl mt-4">
    <h2 className="text-2xl font-bold mb-4 text-violet-900">About iTask</h2>
    <p className="text-lg text-violet-800">iTask is a simple and intuitive app to help you manage your daily tasks. It provides a seamless experience for adding, editing, and tracking your todos.</p>
  </div>
);

export default Navbar;
