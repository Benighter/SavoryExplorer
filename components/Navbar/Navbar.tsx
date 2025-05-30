"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiSearch, FiLoader } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import DonateButton from '../Donation/DonateButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsLoading(true);
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      // Note: The loading state will be cleared when the page navigation completes
      // and the component unmounts. If we wanted to persist it across pages,
      // we would need to use context or a state management library.
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-primary-600">
              Savory<span className="text-accent-500">Explorer</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/categories" className="font-medium hover:text-primary-600 transition-colors">
              Categories
            </Link>
            <Link href="/cuisines" className="font-medium hover:text-primary-600 transition-colors">
              Cuisines
            </Link>
            <Link href="/random" className="font-medium hover:text-primary-600 transition-colors">
              Random Recipe
            </Link>
            <DonateButton variant="navbar" />
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300"
                disabled={isLoading}
              />
              {isLoading ? (
                <FiLoader className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 animate-spin" />
              ) : (
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              )}
            </div>
            <button 
              type="submit" 
              className="btn btn-primary ml-2 rounded-full flex items-center" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <FiLoader className="animate-spin mr-1" />
                  <span>Searching...</span>
                </>
              ) : (
                "Search"
              )}
            </button>
          </form>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="font-medium hover:text-primary-600 transition-colors" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/categories" className="font-medium hover:text-primary-600 transition-colors" onClick={toggleMenu}>
                Categories
              </Link>
              <Link href="/cuisines" className="font-medium hover:text-primary-600 transition-colors" onClick={toggleMenu}>
                Cuisines
              </Link>
              <Link href="/random" className="font-medium hover:text-primary-600 transition-colors" onClick={toggleMenu}>
                Random Recipe
              </Link>
              <DonateButton variant="navbar" />
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex items-center mt-2">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300"
                    disabled={isLoading}
                  />
                  {isLoading ? (
                    <FiLoader className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 animate-spin" />
                  ) : (
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  )}
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary ml-2 rounded-full flex items-center" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <FiLoader className="animate-spin" />
                  ) : (
                    "Search"
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 