/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve MealDB's existing thumbnails directly instead of storing new variants.
    unoptimized: true,
    domains: ['www.themealdb.com'],
  },
}

module.exports = nextConfig 
