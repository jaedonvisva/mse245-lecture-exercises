/*
Lecture 6-1: UI Components, npm, and App Structure
Topics seen in the lecture deck:
- npm
- adding Material UI components
- typography
- restaurant/app structure analogy

Instructions:
Complete each TODO.
*/

import React from 'react';
// Assume Material UI is installed.
// TODO: import Typography, Card, CardContent, Button from '@mui/material'

// 1) Build a component that uses Typography for a recipe title and difficulty.
export function RecipeCard({ item }) {
  // TODO
}

// 2) Create a component that explains the restaurant analogy in JSX.
export function ArchitectureTable() {
  // TODO
}

// 3) Render a list of RecipeCard components.
export default function App() {
  const recipes = [
    { recipeID: 1, title: 'Pasta Primavera', difficulty: 'Easy' },
    { recipeID: 2, title: 'Butter Chicken', difficulty: 'Medium' },
  ];

  // TODO
}

// 4) Short written task:
// In a comment below, explain:
// - what npm is used for
// - what a UI component library gives you
// - why consistent typography helps app design
