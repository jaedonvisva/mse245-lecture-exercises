/*
Lecture 5: React State and Effects
Topics seen in the lecture deck:
- React state
- lifting state up
- useEffect
- conditional rendering
- removing an item from a stateful list
- simulating data loading from the server

Instructions:
Complete each TODO.
*/

import React, { useEffect, useState } from 'react';

export function Search({ searchTerm, onSearchChange }) {
  // TODO
}

export function RecipeItem({ item, onRemoveItem }) {
  // TODO
}

export function RecipeList({ list, onRemoveItem }) {
  // TODO
}

export default function App() {
  const initialRecipes = [
    { recipeID: 1, title: 'Pasta', difficulty: 'Easy' },
    { recipeID: 2, title: 'Tacos', difficulty: 'Medium' },
    { recipeID: 3, title: 'Soup', difficulty: 'Easy' },
  ];

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: simulate loading from the server with setTimeout
    // after loading, set recipes to initialRecipes and loading to false
  }, []);

  function handleRemoveRecipe(item) {
    // TODO
  }

  const filteredRecipes = recipes.filter((recipe) => {
    // TODO: filter by title using searchTerm, case-insensitive
  });

  // TODO:
  // - render loading text while loading
  // - render Search component
  // - conditionally render either filtered results text or all recipes text
  // - render RecipeList
}
