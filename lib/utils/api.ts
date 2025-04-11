import axios from 'axios';
import { 
  Meal, 
  MealSearchResponse, 
  CategoryResponse,
  AreaResponse,
  IngredientResponse
} from '../types/meals';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Search meal by name
export const searchMealsByName = async (query: string): Promise<Meal[]> => {
  try {
    const response = await axios.get<MealSearchResponse>(`${API_BASE_URL}/search.php?s=${query}`);
    return response.data.meals || [];
  } catch (error) {
    console.error('Error searching meals:', error);
    return [];
  }
};

// List all meals by first letter
export const getMealsByFirstLetter = async (letter: string): Promise<Meal[]> => {
  try {
    const response = await axios.get<MealSearchResponse>(`${API_BASE_URL}/search.php?f=${letter}`);
    return response.data.meals || [];
  } catch (error) {
    console.error('Error fetching meals by letter:', error);
    return [];
  }
};

// Lookup full meal details by id
export const getMealById = async (id: string): Promise<Meal | null> => {
  try {
    const response = await axios.get<MealSearchResponse>(`${API_BASE_URL}/lookup.php?i=${id}`);
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error('Error fetching meal details:', error);
    return null;
  }
};

// Lookup a single random meal
export const getRandomMeal = async (): Promise<Meal | null> => {
  try {
    const response = await axios.get<MealSearchResponse>(`${API_BASE_URL}/random.php`);
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error('Error fetching random meal:', error);
    return null;
  }
};

// List all meal categories
export const getAllCategories = async () => {
  try {
    const response = await axios.get<CategoryResponse>(`${API_BASE_URL}/categories.php`);
    return response.data.categories || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

// List all Areas
export const getAllAreas = async () => {
  try {
    const response = await axios.get<AreaResponse>(`${API_BASE_URL}/list.php?a=list`);
    return response.data.meals || [];
  } catch (error) {
    console.error('Error fetching areas:', error);
    return [];
  }
};

// List all Ingredients
export const getAllIngredients = async () => {
  try {
    const response = await axios.get<IngredientResponse>(`${API_BASE_URL}/list.php?i=list`);
    return response.data.meals || [];
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    return [];
  }
};

// Filter by main ingredient
export const getMealsByIngredient = async (ingredient: string): Promise<Meal[]> => {
  try {
    const response = await axios.get<MealSearchResponse>(`${API_BASE_URL}/filter.php?i=${ingredient}`);
    return response.data.meals || [];
  } catch (error) {
    console.error('Error filtering by ingredient:', error);
    return [];
  }
};

// Filter by Category
export const getMealsByCategory = async (category: string): Promise<Meal[]> => {
  try {
    const response = await axios.get<MealSearchResponse>(`${API_BASE_URL}/filter.php?c=${category}`);
    return response.data.meals || [];
  } catch (error) {
    console.error('Error filtering by category:', error);
    return [];
  }
};

// Filter by Area
export const getMealsByArea = async (area: string): Promise<Meal[]> => {
  try {
    const response = await axios.get<MealSearchResponse>(`${API_BASE_URL}/filter.php?a=${area}`);
    return response.data.meals || [];
  } catch (error) {
    console.error('Error filtering by area:', error);
    return [];
  }
};

// Helper to get ingredient image URL
export const getIngredientImageUrl = (ingredient: string, isSmall = false) => {
  return `https://www.themealdb.com/images/ingredients/${ingredient}${isSmall ? '-Small' : ''}.png`;
}; 