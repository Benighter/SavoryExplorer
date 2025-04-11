import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Savory Explorer - Discover Delicious Recipes',
  description: 'Explore thousands of recipes from around the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        {children}
      </body>
    </html>
  );
} 