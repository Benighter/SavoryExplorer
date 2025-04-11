"use client";

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false, 
  className = '' 
}: SectionTitleProps) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
      )}
      <div className={`h-1 w-20 bg-accent-500 mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle; 