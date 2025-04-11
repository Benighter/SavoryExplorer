"use client";

import React from 'react';
import Layout from '../../../components/Layout';
import SkeletonLoader from '../../../components/SkeletonLoader';

export default function RecipeLoading() {
  return (
    <Layout>
      <div className="container-custom py-8">
        <div className="mb-6">
          {/* Back link placeholder */}
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>
        
        <SkeletonLoader type="detail" />
      </div>
    </Layout>
  );
} 