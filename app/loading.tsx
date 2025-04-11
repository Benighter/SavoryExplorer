"use client";

import React from 'react';
import Layout from '../components/Layout';
import SkeletonLoader from '../components/SkeletonLoader';

export default function HomeLoading() {
  return (
    <Layout>
      {/* Hero Section Skeleton */}
      <section className="relative bg-primary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="bg-gray-800 h-full w-full"></div>
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <div className="h-12 bg-white/20 rounded animate-pulse mb-6"></div>
            <div className="h-6 bg-white/20 rounded animate-pulse mb-2"></div>
            <div className="h-6 bg-white/20 rounded animate-pulse mb-8 w-3/4"></div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <div className="flex-grow h-12 bg-white/20 rounded-full animate-pulse"></div>
              <div className="w-32 h-12 bg-accent-500/50 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Recipe Skeleton */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="mb-8">
            <div className="h-10 w-1/3 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-1 w-20 bg-accent-500/50 rounded animate-pulse mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-80 lg:h-96 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center mb-3">
                <div className="bg-gray-200 h-6 w-20 rounded-full animate-pulse"></div>
                <div className="ml-3 bg-gray-200 h-6 w-32 rounded-full animate-pulse"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="bg-gray-200 h-4 rounded animate-pulse mb-2"></div>
              <div className="bg-gray-200 h-4 rounded animate-pulse mb-2"></div>
              <div className="bg-gray-200 h-4 w-3/4 rounded animate-pulse mb-6"></div>
              <div className="bg-primary-500/50 h-10 w-32 rounded animate-pulse self-start"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section Skeleton */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="mb-8">
            <div className="h-10 w-1/3 bg-gray-300 rounded animate-pulse mb-2"></div>
            <div className="h-6 w-1/2 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-1 w-20 bg-accent-500/50 rounded animate-pulse mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="card overflow-hidden h-full animate-pulse">
                <div className="h-40 bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-300 rounded mb-2 w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-1"></div>
                  <div className="h-4 bg-gray-300 rounded mb-1"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
} 