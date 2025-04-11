# 🍲 SavoryExplorer - Food Recipe App

A modern, responsive food recipe application built with Next.js, TypeScript, and Tailwind CSS that helps users discover delicious recipes from around the world.

![SavoryExplorer Screenshot](screenshot.png)

## 🌟 Features

- **Recipe Search**: Find recipes by name, ingredient, or category
- **Browse Categories**: Explore recipes by food categories 
- **Cuisine Explorer**: Discover recipes from different world cuisines
- **Detailed Recipe View**: Step-by-step instructions, ingredients with images, and nutritional information
- **Random Recipe**: Get inspired with a random recipe suggestion
- **Responsive Design**: Beautiful UI that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance and SEO

## 🚀 Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **API**: [TheMealDB](https://www.themealdb.com/api.php)

## 📋 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/savory-explorer.git
   cd savory-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🛠️ Building for Production

```bash
npm run build
npm start
```

## 🧩 Project Structure

```
/
├── app/                  # Next.js app router files
│   ├── page.tsx          # Homepage
│   ├── recipe/[id]/      # Recipe detail page
│   ├── category/[id]/    # Category page
│   ├── cuisine/[id]/     # Cuisine page
│   └── ...
├── components/           # React components
│   ├── Layout/           # Layout components
│   ├── Navbar/           # Navigation components 
│   ├── RecipeCard/       # Recipe card component
│   └── ...
├── lib/                  # Utility libraries
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
└── public/               # Static assets
```

## 📱 API Endpoints Used

- Search meal by name: `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
- List all meals by first letter: `www.themealdb.com/api/json/v1/1/search.php?f=a`
- Lookup full meal details by id: `www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
- Lookup a single random meal: `www.themealdb.com/api/json/v1/1/random.php`
- List all meal categories: `www.themealdb.com/api/json/v1/1/categories.php`
- List all Categories, Area, Ingredients: `www.themealdb.com/api/json/v1/1/list.php?c=list`
- Filter by main ingredient: `www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
- Filter by Category: `www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
- Filter by Area: `www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`

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