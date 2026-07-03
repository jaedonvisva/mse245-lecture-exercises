import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RecipeCard, ArchitectureTable } from './lecture_6_1_ui_components_npm_app_structure';
import App from './lecture_6_1_ui_components_npm_app_structure';

// --- RecipeCard ---
describe('RecipeCard', () => {
  const item = { recipeID: 1, title: 'Pasta Primavera', difficulty: 'Easy' };

  test('renders the recipe title', () => {
    render(<RecipeCard item={item} />);
    expect(screen.getByText(/Pasta Primavera/i)).toBeInTheDocument();
  });

  test('renders the difficulty', () => {
    render(<RecipeCard item={item} />);
    expect(screen.getByText(/Easy/i)).toBeInTheDocument();
  });
});

// --- ArchitectureTable ---
describe('ArchitectureTable', () => {
  test('renders without crashing', () => {
    const { container } = render(<ArchitectureTable />);
    expect(container).toBeInTheDocument();
  });

  test('mentions frontend, backend, api, and database concepts', () => {
    render(<ArchitectureTable />);
    const text = document.body.textContent.toLowerCase();
    expect(text).toMatch(/frontend/i);
    expect(text).toMatch(/backend/i);
    expect(text).toMatch(/api|database/i);
  });
});

// --- App ---
describe('App (lecture 6)', () => {
  test('renders both recipe cards', () => {
    render(<App />);
    expect(screen.getByText(/Pasta Primavera/i)).toBeInTheDocument();
    expect(screen.getByText(/Butter Chicken/i)).toBeInTheDocument();
  });
});
