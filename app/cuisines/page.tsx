import React from 'react';
import Link from 'next/link';
import { FiGlobe } from 'react-icons/fi';
import Layout from '../../components/Layout';
import SectionTitle from '../../components/SectionTitle';
import { getAllAreas } from '../../lib/utils/api';

export default async function CuisinesPage() {
  const cuisines = await getAllAreas();

  return (
    <Layout>
      <div className="container-custom py-12">
        <SectionTitle 
          title="World Cuisines" 
          subtitle="Explore recipes from different cultures and regions" 
          centered
          className="mb-12"
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {cuisines.map((cuisine) => (
            <Link 
              href={`/cuisine/${cuisine.strArea}`}
              key={cuisine.strArea}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                  <FiGlobe size={24} />
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-1">
                {cuisine.strArea}
              </h3>
              <p className="text-sm text-gray-500">Cuisine</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
} 