import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiHeart } from 'react-icons/fi';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import { getRandomMeal } from '../lib/utils/api';
import DonateButton from '../components/Donation/DonateButton';

export default async function Home() {
  // Fetch featured/random recipe
  const featuredRecipe = await getRandomMeal();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="bg-gray-800 h-full w-full"></div>
        </div>
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Discover Delicious Recipes From Around The World
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find your next culinary masterpiece with our extensive collection 
              of recipes from diverse cuisines.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Search for recipes..."
                  className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
              </div>
              <button type="submit" className="btn btn-secondary py-3 px-8 sm:px-6 rounded-full">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Donation Banner */}
      <section className="bg-gradient-to-r from-accent-500 to-accent-600 py-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 md:w-60 md:h-60 opacity-10">
          <FiHeart className="w-full h-full" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                Support SavoryExplorer
              </h2>
              <p className="text-white text-opacity-90 max-w-xl">
                Help us continue creating delicious recipe content and improving our platform.
                Your contribution makes a difference!
              </p>
            </div>
            
            <DonateButton 
              className="px-8 py-3 text-lg shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-1"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Recipe */}
      {featuredRecipe && (
        <section className="bg-white py-16">
          <div className="container-custom">
            <SectionTitle 
              title="Featured Recipe" 
              subtitle="Discover our chef's special selection for you" 
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                <Image 
                  src={featuredRecipe.strMealThumb} 
                  alt={featuredRecipe.strMeal} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-3">
                  <span className="bg-accent-100 text-accent-800 text-sm font-medium px-3 py-1 rounded-full">
                    {featuredRecipe.strCategory}
                  </span>
                  <span className="ml-3 text-gray-500 text-sm">
                    {featuredRecipe.strArea} Cuisine
                  </span>
                </div>
                <h2 className="text-3xl font-heading font-bold mb-4">
                  {featuredRecipe.strMeal}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {featuredRecipe.strInstructions?.substring(0, 200)}...
                </p>
                <Link href={`/recipe/${featuredRecipe.idMeal}`} className="btn btn-primary self-start">
                  View Full Recipe
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
} 