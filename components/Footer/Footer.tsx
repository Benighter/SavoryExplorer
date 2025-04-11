"use client";

import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-heading font-bold">
              Savory<span className="text-accent-500">Explorer</span>
            </h2>
            <p className="text-gray-300 max-w-md">
              Discover delicious recipes from around the world with our comprehensive 
              collection of meals, ingredients, and cooking guides.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Recipe Categories
                </Link>
              </li>
              <li>
                <Link href="/cuisines" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Cuisines
                </Link>
              </li>
              <li>
                <Link href="/random" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Random Recipe
                </Link>
              </li>
            </ul>
          </div>

          {/* Author Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-semibold">Author</h3>
            <p className="text-gray-300">Bennet Nkolele</p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Benighter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-500 transition-colors"
              >
                <FiGithub size={20} className="hover:animate-pulse" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bennet-nkolele-321285249/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-500 transition-colors"
              >
                <FiLinkedin size={20} className="hover:animate-pulse" />
              </a>
              <a 
                href="https://react-personal-portfolio-alpha.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-500 transition-colors"
              >
                <FiGlobe size={20} className="hover:animate-pulse" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} SavoryExplorer. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Powered by <a href="https://www.themealdb.com/" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">TheMealDB</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 