"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface RecipeCardProps {
  id: string;
  title: string;
  category?: string;
  area?: string;
  imageUrl: string;
}

const RecipeCard = ({ id, title, category, area, imageUrl }: RecipeCardProps) => {
  return (
    <motion.div 
      className="card h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 sm:h-52">
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover" 
        />
        {category && (
          <span className="absolute top-2 left-2 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center text-gray-600 text-sm">
            {area ? (
              <>
                <FiClock className="mr-1" />
                <span>{area}</span>
              </>
            ) : (
              <span className="opacity-0">Placeholder</span>
            )}
          </div>
          <Link href={`/recipe/${id}`} className="btn btn-primary flex items-center text-sm py-1">
            View Recipe
            <FiChevronRight className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard; 