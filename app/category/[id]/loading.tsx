"use client";

import React from 'react';
import Layout from '../../../components/Layout';
import SkeletonLoader from '../../../components/SkeletonLoader';

export default function CategoryLoading() {
  return (
    <Layout>
      <div className="container-custom py-12">
        {/* Title skeleton */}
        <div className="mb-12">
          <div className="h-10 w-1/3 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-1 w-20 bg-gray-200 rounded animate-pulse mt-4"></div>
        </div>
        
        {/* Recipe cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <SkeletonLoader key={index} type="card" />
          ))}
        </div>
      </div>
    </Layout>
  );
} 