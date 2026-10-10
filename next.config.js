/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve MealDB thumbnails directly to avoid Vercel image variants.
    unoptimized: true,
    domains: ['www.themealdb.com'],
  },
}

module.exports = nextConfig 