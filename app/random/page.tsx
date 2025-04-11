import React from 'react';
import { redirect } from 'next/navigation';
import { getRandomMeal } from '../../lib/utils/api';

export default async function RandomPage() {
  const randomMeal = await getRandomMeal();
  
  if (randomMeal) {
    redirect(`/recipe/${randomMeal.idMeal}`);
  }
  
  // Fallback in case of API error
  return redirect('/');
} 