"use client";

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonLoaderProps {
  count?: number;
  type: 'card' | 'detail' | 'list';
  className?: string;
}

const SkeletonLoader = ({ count = 1, type, className = '' }: SkeletonLoaderProps) => {
  const renderCardSkeleton = () => (
    <div className="card h-full">
      <Skeleton height={200} className="mb-4" />
      <div className="p-4">
        <Skeleton width="70%" height={24} className="mb-2" />
        <Skeleton count={2} className="mb-3" />
        <div className="flex justify-between items-center">
          <Skeleton width={60} />
          <Skeleton width={90} height={30} />
        </div>
      </div>
    </div>
  );

  const renderDetailSkeleton = () => (
    <div>
      <Skeleton height={300} className="mb-6" />
      <Skeleton width="60%" height={36} className="mb-4" />
      <div className="flex space-x-4 mb-6">
        <Skeleton width={80} />
        <Skeleton width={80} />
      </div>
      <Skeleton height={24} width="40%" className="mb-3" />
      <Skeleton count={4} className="mb-6" />
      <Skeleton height={24} width="40%" className="mb-3" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {Array(8).fill(0).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <Skeleton circle width={60} height={60} className="mb-2" />
            <Skeleton width={70} />
          </div>
        ))}
      </div>
      <Skeleton height={24} width="40%" className="mb-3" />
      <Skeleton count={8} />
    </div>
  );

  const renderListSkeleton = () => (
    <div className="grid grid-cols-1 gap-2">
      {Array(5).fill(0).map((_, i) => (
        <div key={i} className="flex items-center space-x-4 p-3 bg-white rounded-md">
          <Skeleton circle width={40} height={40} />
          <div className="flex-1">
            <Skeleton width="60%" />
          </div>
          <Skeleton width={80} />
        </div>
      ))}
    </div>
  );

  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return renderCardSkeleton();
      case 'detail':
        return renderDetailSkeleton();
      case 'list':
        return renderListSkeleton();
      default:
        return null;
    }
  };

  return (
    <>
      {Array(count).fill(0).map((_, i) => (
        <div key={i} className={className}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader; 