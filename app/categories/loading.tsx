"use client";

import React from 'react';
import Layout from '../../components/Layout';
import SkeletonLoader from '../../components/SkeletonLoader';

export default function CategoriesLoading() {
  return (
    <Layout>
      <div className="container-custom py-12">
        {/* Title skeleton */}
        <div className="mb-12 text-center">
          <div className="h-10 w-1/3 bg-gray-200 rounded animate-pulse mb-2 mx-auto"></div>
          <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse mx-auto"></div>
          <div className="h-1 w-20 bg-gray-200 rounded animate-pulse mt-4 mx-auto"></div>
        </div>
        
        {/* Category cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
            <div key={index} className="card h-full animate-pulse">
              <div className="h-40 bg-gray-200 rounded-t-lg"></div>
              <div className="p-4">
                <div className="h-6 w-1/2 bg-gray-300 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 