"use client";

import React from 'react';
import Layout from '../../components/Layout';

export default function CuisinesLoading() {
  return (
    <Layout>
      <div className="container-custom py-12">
        {/* Title skeleton */}
        <div className="mb-12 text-center">
          <div className="h-10 w-1/3 bg-gray-200 rounded animate-pulse mb-2 mx-auto"></div>
          <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse mx-auto"></div>
          <div className="h-1 w-20 bg-gray-200 rounded animate-pulse mt-4 mx-auto"></div>
        </div>
        
        {/* Cuisine tiles skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Array(15).fill(0).map((_, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 text-center shadow-md animate-pulse"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200"></div>
              </div>
              <div className="h-6 w-2/3 bg-gray-200 rounded mb-1 mx-auto"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 