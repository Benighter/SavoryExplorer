import React from 'react';
import Layout from '../../components/Layout';
import RecipeCard from '../../components/RecipeCard';
import SectionTitle from '../../components/SectionTitle';
import { searchMealsByName } from '../../lib/utils/api';

interface SearchPageProps {
  searchParams: { q: string };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  const searchResults = await searchMealsByName(query);

  return (
    <Layout>
      <div className="container-custom py-12">
        <SectionTitle 
          title={`Search Results: ${query}`} 
          subtitle={`${searchResults.length} recipe${searchResults.length !== 1 ? 's' : ''} found`} 
          className="mb-12"
        />
        
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((meal) => (
              <RecipeCard 
                key={meal.idMeal}
                id={meal.idMeal}
                title={meal.strMeal}
                category={meal.strCategory}
                area={meal.strArea}
                imageUrl={meal.strMealThumb}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-heading font-semibold mb-4">No recipes found</h3>
            <p className="text-gray-600">
              We couldn't find any recipes matching "{query}".
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
} 