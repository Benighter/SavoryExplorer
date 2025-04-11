import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiUsers, FiTag, FiChevronLeft } from 'react-icons/fi';
import Layout from '../../../components/Layout';
import { getMealById } from '../../../lib/utils/api';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function RecipePage({ params }: PageProps) {
  const { id } = params;
  const meal = await getMealById(id);

  if (!meal) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <h1 className="text-3xl font-heading font-bold mb-4">Recipe Not Found</h1>
          <p className="mb-8">Sorry, the recipe you're looking for doesn't exist.</p>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </Layout>
    );
  }

  // Extract ingredients and measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}` as keyof typeof meal];
    const measure = meal[`strMeasure${i}` as keyof typeof meal];
    
    if (ingredient && typeof ingredient === 'string' && ingredient.trim() !== '') {
      ingredients.push({
        name: ingredient,
        measure: measure || '',
        image: `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`
      });
    }
  }

  // Split instructions into steps
  const instructions = meal.strInstructions
    .split(/\.\s+/)
    .filter(step => step.trim() !== '')
    .map(step => step.trim() + (step.endsWith('.') ? '' : '.'));

  // Extract tags
  const tags = meal.strTags ? meal.strTags.split(',').map(tag => tag.trim()) : [];

  return (
    <Layout>
      <div className="container-custom py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-primary-600 mb-6 hover:underline">
          <FiChevronLeft className="mr-1" />
          Back to recipes
        </Link>
        
        {/* Recipe Header */}
        <div className="relative rounded-xl overflow-hidden h-64 md:h-96 mb-8">
          <Image 
            src={meal.strMealThumb} 
            alt={meal.strMeal}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
            <div className="p-6 text-white">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {meal.strCategory}
                </span>
                <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {meal.strArea} Cuisine
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold">
                {meal.strMeal}
              </h1>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recipe Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">About This Recipe</h2>
              
              {/* Tags */}
              {tags.length > 0 && (
                <div className="flex items-center flex-wrap gap-2 mb-4">
                  <FiTag className="text-gray-500" />
                  {tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            {/* Instructions */}
            <div className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Instructions</h2>
              <ol className="space-y-4">
                {instructions.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="bg-accent-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-gray-700">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            
            {/* Video */}
            {meal.strYoutube && (
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">Watch Video</h2>
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                  <iframe 
                    src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`} 
                    title={`${meal.strMeal} video`}
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Ingredients */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-heading font-semibold mb-4">Ingredients</h2>
              <ul className="space-y-4">
                {ingredients.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-12 h-12 mr-3 relative flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.measure}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Source & More Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-heading font-semibold mb-4">Additional Information</h2>
              
              {meal.strSource && (
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">Source</h3>
                  <a 
                    href={meal.strSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Original Recipe
                  </a>
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Category</h3>
                <Link 
                  href={`/category/${meal.strCategory}`}
                  className="text-primary-600 hover:underline"
                >
                  {meal.strCategory}
                </Link>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Cuisine</h3>
                <Link 
                  href={`/cuisine/${meal.strArea}`}
                  className="text-primary-600 hover:underline"
                >
                  {meal.strArea}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 