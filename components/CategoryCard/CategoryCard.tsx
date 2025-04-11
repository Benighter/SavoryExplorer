"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

const CategoryCard = ({ id, name, imageUrl, description }: CategoryCardProps) => {
  return (
    <motion.div 
      className="card overflow-hidden h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/category/${id}`} className="block h-full">
        <div className="relative h-40">
          <Image 
            src={imageUrl} 
            alt={name} 
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <h3 className="text-white font-heading font-semibold text-xl p-4">{name}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard; 