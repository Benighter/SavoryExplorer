import React from 'react';
import Layout from '../../components/Layout';
import CategoryCard from '../../components/CategoryCard';
import SectionTitle from '../../components/SectionTitle';
import { getAllCategories } from '../../lib/utils/api';

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <Layout>
      <div className="container-custom py-12">
        <SectionTitle 
          title="Recipe Categories" 
          subtitle="Browse our recipes by food type" 
          centered
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard 
              key={category.idCategory}
              id={category.strCategory}
              name={category.strCategory}
              imageUrl={category.strCategoryThumb}
              description={category.strCategoryDescription}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
} 