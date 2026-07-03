import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Search, RecipeItem, RecipeList } from './lecture_5_react_state_effects';
import App from './lecture_5_react_state_effects';

// --- Search ---
describe('Search', () => {
  test('renders an input with the current searchTerm as value', () => {
    render(<Search searchTerm="pasta" onSearchChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('pasta');
  });

  test('calls onSearchChange when input changes', () => {
    const handler = jest.fn();
    render(<Search searchTerm="" onSearchChange={handler} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'tacos' } });
    expect(handler).toHaveBeenCalled();
  });
});

// --- RecipeItem ---
describe('RecipeItem', () => {
  const item = { recipeID: 1, title: 'Pasta', difficulty: 'Easy' };

  test('renders the recipe title', () => {
    render(<RecipeItem item={item} onRemoveItem={() => {}} />);
    expect(screen.getByText(/Pasta/i)).toBeInTheDocument();
  });

  test('calls onRemoveItem with the item when remove is triggered', () => {
    const handler = jest.fn();
    render(<RecipeItem item={item} onRemoveItem={handler} />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(handler).toHaveBeenCalledWith(item);
  });
});

// --- RecipeList ---
describe('RecipeList', () => {
  const list = [
    { recipeID: 1, title: 'Pasta', difficulty: 'Easy' },
    { recipeID: 2, title: 'Tacos', difficulty: 'Medium' },
  ];

  test('renders all items in the list', () => {
    render(<RecipeList list={list} onRemoveItem={() => {}} />);
    expect(screen.getByText(/Pasta/i)).toBeInTheDocument();
    expect(screen.getByText(/Tacos/i)).toBeInTheDocument();
  });
});

// --- App (integration) ---
describe('App', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  test('shows loading state initially', () => {
    render(<App />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('shows recipes after loading completes', async () => {
    render(<App />);
    await act(async () => { jest.runAllTimers(); });
    expect(screen.getByText(/Pasta/i)).toBeInTheDocument();
    expect(screen.getByText(/Tacos/i)).toBeInTheDocument();
    expect(screen.getByText(/Soup/i)).toBeInTheDocument();
  });

  test('filters recipes by search term', async () => {
    render(<App />);
    await act(async () => { jest.runAllTimers(); });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'pasta' } });
    expect(screen.getByText(/Pasta/i)).toBeInTheDocument();
    expect(screen.queryByText(/Tacos/i)).not.toBeInTheDocument();
  });

  test('removes a recipe when its remove button is clicked', async () => {
    render(<App />);
    await act(async () => { jest.runAllTimers(); });
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(screen.getAllByRole('button').length).toBe(buttons.length - 1);
  });
});
