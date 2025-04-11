import React from 'react';
import Layout from '../../../components/Layout';
import RecipeCard from '../../../components/RecipeCard';
import SectionTitle from '../../../components/SectionTitle';
import { getMealsByCategory } from '../../../lib/utils/api';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { id } = params;
  const decodedCategory = decodeURIComponent(id);
  const meals = await getMealsByCategory(decodedCategory);

  return (
    <Layout>
      <div className="container-custom py-12">
        <SectionTitle 
          title={`${decodedCategory} Recipes`} 
          subtitle={`Discover our collection of ${decodedCategory.toLowerCase()} recipes`} 
          className="mb-12"
        />
        
        {meals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {meals.map((meal) => (
              <RecipeCard 
                key={meal.idMeal}
                id={meal.idMeal}
                title={meal.strMeal}
                category={decodedCategory}
                imageUrl={meal.strMealThumb}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-heading font-semibold mb-4">No recipes found</h3>
            <p className="text-gray-600">
              We couldn't find any recipes in the {decodedCategory} category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
} 