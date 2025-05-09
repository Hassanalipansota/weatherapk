// Header.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import { Menu, X } from 'lucide-react'; // for icons (install lucide-react)

function Header() {
  const navigate = useNavigate();
  const [authStatus, setAuthStatus] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  useEffect(() => {
    const fetchUser = async () => {
      const user = await authService.getCurrentUser();
      setAuthStatus(user);
    };
    fetchUser();
  }, []);

  const logoutHandler = async () => {
    await authService.logout();
    setAuthStatus(null);
    navigate('/');
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'Contact Us', slug: '/contactus', active: authStatus },
  ];

  const handleNavClick = (slug) => {
    navigate(slug);
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-gray-800 text-white fixed top-0 left-0 shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>
          WeatherApp
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 items-center">
          {navItems.map(
            (item) =>
              item.active && (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.slug)}
                    className="px-4 py-2 rounded hover:bg-gray-700 transition"
                  >
                    {item.name}
                  </button>
                </li>
              )
          )}
          {authStatus && (
            <li>
              <button
                onClick={logoutHandler}
                className="px-4 py-2 rounded hover:bg-red-600 bg-red-500 transition"
              >
                Logout
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-800 flex flex-col gap-2 py-2 px-4">
          {navItems.map(
            (item) =>
              item.active && (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.slug)}
                    className="block w-full text-left px-4 py-2 rounded hover:bg-gray-700 transition"
                  >
                    {item.name}
                  </button>
                </li>
              )
          )}
          {authStatus && (
            <li>
              <button
                onClick={logoutHandler}
                className="block w-full text-left px-4 py-2 rounded hover:bg-red-600 bg-red-500 transition"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      )}
    </header>
  );
}

export default Header;
