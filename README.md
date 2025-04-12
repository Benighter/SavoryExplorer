# 🍲 SavoryExplorer - Food Recipe App

A modern, responsive food recipe application built with Next.js, TypeScript, and Tailwind CSS that helps users discover delicious recipes from around the world. SavoryExplorer connects to TheMealDB API to provide a rich and diverse collection of recipes with step-by-step instructions.

![SavoryExplorer Screenshot](/public/screenshot.png)

## 🌐 Live Demo

Check out the live application: [SavoryExplorer](https://savory-explorer.vercel.app/)

## 🌟 Features

- **Recipe Search**: Find recipes by name, ingredient, or category with instant results
- **Browse Categories**: Explore recipes by food categories with beautiful visual cards
- **Cuisine Explorer**: Discover recipes from different world cuisines, from Italian to Thai
- **Detailed Recipe View**: Step-by-step instructions, ingredients with images, measurements, and nutritional information
- **Random Recipe Generator**: Get inspired with a random recipe suggestion when you're unsure what to cook
- **Responsive Design**: Beautiful UI that works flawlessly on all devices with full screen utilization
- **Fast Performance**: Built with Next.js for optimal performance, SEO, and user experience
- **Favorites System**: Save your favorite recipes for quick access using local storage
- **Share Functionality**: Easily share recipes with friends and family
- **Dark/Light Mode**: Toggle between light and dark themes for comfortable viewing

## 🚀 Tech Stack

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) - Utilizing the App Router for enhanced performance
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - For type safety and better developer experience
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) - For rapid and responsive UI development
- **Animation**: [Framer Motion 10](https://www.framer.com/motion/) - For smooth transitions and interactive elements
- **Icons**: [React Icons 5](https://react-icons.github.io/react-icons/) - For beautiful and consistent iconography
- **HTTP Client**: [Axios 1.6](https://axios-http.com/) - For API requests with better error handling
- **Loading States**: [React Loading Skeleton 3.3](https://www.npmjs.com/package/react-loading-skeleton) - For improved UX during content loading
- **API**: [TheMealDB](https://www.themealdb.com/api.php) - Comprehensive database of recipes from around the world

## 📋 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Benighter/SavoryExplorer.git
   cd savory-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional)**
   Create a `.env.local` file in the root directory:
   ```
   # TheMealDB API Key (if you have a premium key)
   NEXT_PUBLIC_MEALDB_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Open [http://localhost:3000](http://localhost:3000) to see the app in action.

## 🛠️ Building for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 🧩 Project Structure

```
/
├── app/                  # Next.js app router files
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout with global providers
│   ├── loading.tsx       # Loading UI components
│   ├── recipe/[id]/      # Recipe detail page
│   ├── category/[id]/    # Category page
│   ├── cuisine/[id]/     # Cuisine page
│   ├── search/           # Search results page
│   ├── random/           # Random recipe page
│   └── cuisines/         # All cuisines listing page
├── components/           # React components
│   ├── Layout/           # Layout components
│   ├── Navbar/           # Navigation components 
│   ├── RecipeCard/       # Recipe card component
│   ├── Donation/         # Donation components
│   └── SectionTitle/     # Section title component
├── lib/                  # Utility libraries
│   ├── types/            # TypeScript type definitions
│   │   └── meals.ts      # Recipe and API response types
│   └── utils/            # Utility functions
│       └── api.ts        # API service for TheMealDB
├── public/               # Static assets
│   └── screenshot.png    # App screenshot for README
```

## 📱 API Integration

SavoryExplorer integrates with TheMealDB API to provide a rich database of recipes. Here are the key endpoints used:

### Search & Filtering Endpoints
- Search meal by name: `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
- List all meals by first letter: `www.themealdb.com/api/json/v1/1/search.php?f=a`
- Lookup full meal details by id: `www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
- Lookup a single random meal: `www.themealdb.com/api/json/v1/1/random.php`

### Category & Classification Endpoints
- List all meal categories: `www.themealdb.com/api/json/v1/1/categories.php`
- List all Categories, Area, Ingredients: `www.themealdb.com/api/json/v1/1/list.php?c=list`

### Filtering Endpoints
- Filter by main ingredient: `www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
- Filter by Category: `www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
- Filter by Area: `www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`

## 💻 Key Implementation Details

### Type Safety
The application uses TypeScript interfaces to ensure type safety when working with API data:

```typescript
// Example of the Meal interface used throughout the app
export interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  // ... other properties
}
```

### API Service Layer
A dedicated API service layer handles all communication with TheMealDB:

```typescript
// Example of API service function
export const getMealById = async (id: string): Promise<Meal | null> => {
  try {
    const response = await axios.get<MealSearchResponse>(`${API_BASE_URL}/lookup.php?i=${id}`);
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error('Error fetching meal details:', error);
    return null;
  }
};
```

### Responsive Design
The app is fully responsive with Tailwind CSS breakpoints for all screen sizes:
- Mobile-first approach
- Fluid typography and spacing
- Adaptive layouts using Tailwind's responsive modifiers

## 🧪 Future Enhancements

- User authentication and profiles
- Recipe rating system
- Meal planning calendar
- Shopping list generator
- Nutritional information calculator
- Recipe modification and saving
- Social sharing features
- Offline support with PWA

## 👤 Author

Bennet Nkolele

<div style="display: flex; gap: 10px;">
  <a href="https://github.com/Benighter" title="GitHub">
    <img src="https://img.shields.io/badge/GitHub-Benighter-blue?style=for-the-badge&logo=github" alt="GitHub"/>
  </a>
  <a href="https://www.linkedin.com/in/bennet-nkolele-321285249/" title="LinkedIn">
    <img src="https://img.shields.io/badge/LinkedIn-Bennet_Nkolele-blue?style=for-the-badge&logo=linkedin" alt="LinkedIn"/>
  </a>
  <a href="https://react-personal-portfolio-alpha.vercel.app/" title="Portfolio">
    <img src="https://img.shields.io/badge/Portfolio-My_Work-blue?style=for-the-badge" alt="Portfolio"/>
  </a>
</div>

## 📝 License

This project is [MIT](LICENSE) licensed.

## 🙏 Acknowledgements

- [TheMealDB](https://www.themealdb.com/) for providing the free recipe API
- [Next.js Team](https://nextjs.org/) for the excellent framework
- [Tailwind CSS Team](https://tailwindcss.com/) for the utility-first CSS framework
- All contributors and supporters of this project 