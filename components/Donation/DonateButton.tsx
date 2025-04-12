"use client";

import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import Donation from './Donation';

interface DonateButtonProps {
  variant?: 'primary' | 'navbar' | 'footer';
  className?: string;
}

const DonateButton = ({ variant = 'primary', className = '' }: DonateButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  let buttonClasses = '';
  
  switch (variant) {
    case 'navbar':
      // Button style for navbar - more compact
      buttonClasses = 'flex items-center px-3 py-1.5 rounded-full bg-accent-500 hover:bg-accent-600 text-white text-sm transition-colors';
      break;
    case 'footer':
      // Button style for footer - subtle
      buttonClasses = 'flex items-center px-4 py-2 rounded-md bg-white border border-accent-500 hover:bg-accent-50 text-accent-600 transition-colors';
      break;
    default:
      // Default primary button style
      buttonClasses = 'flex items-center px-4 py-2 rounded-md bg-accent-500 hover:bg-accent-600 text-white font-medium transition-colors';
  }
  
  return (
    <>
      <button
        onClick={openModal}
        className={`${buttonClasses} ${className}`}
      >
        <FiHeart className={`${variant === 'navbar' ? 'mr-1' : 'mr-2'} animate-pulse`} />
        <span>{variant === 'navbar' ? 'Donate' : 'Support Us'}</span>
      </button>
      
      <Donation isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default DonateButton; 