import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Title, CourseCard, CourseList, TagList } from './lecture_4_react_jsx_components';

// --- 1) Title ---
describe('Title', () => {
  test('renders an h1 with the given text', () => {
    render(<Title text="Hello MSE245" />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello MSE245');
  });
});

// --- 2) CourseCard ---
describe('CourseCard', () => {
  test('renders the course title', () => {
    render(<CourseCard title="HTTP Basics" difficulty="Easy" />);
    expect(screen.getByText(/HTTP Basics/i)).toBeInTheDocument();
  });

  test('renders the difficulty', () => {
    render(<CourseCard title="HTTP Basics" difficulty="Easy" />);
    expect(screen.getByText(/Easy/i)).toBeInTheDocument();
  });
});

// --- 3) CourseList ---
describe('CourseList', () => {
  const courses = [
    { id: 1, title: 'HTTP Basics', difficulty: 'Easy' },
    { id: 2, title: 'React State', difficulty: 'Medium' },
  ];

  test('renders a card for each course', () => {
    render(<CourseList courses={courses} />);
    expect(screen.getByText(/HTTP Basics/i)).toBeInTheDocument();
    expect(screen.getByText(/React State/i)).toBeInTheDocument();
  });

  test('renders all difficulty labels', () => {
    render(<CourseList courses={courses} />);
    expect(screen.getByText(/Easy/i)).toBeInTheDocument();
    expect(screen.getByText(/Medium/i)).toBeInTheDocument();
  });
});

// --- 4) TagList ---
describe('TagList', () => {
  test('renders each tag', () => {
    render(<TagList tags={['React', 'Node', 'CSS']} />);
    expect(screen.getByText(/React/i)).toBeInTheDocument();
    expect(screen.getByText(/Node/i)).toBeInTheDocument();
    expect(screen.getByText(/CSS/i)).toBeInTheDocument();
  });

  test('renders empty list without crashing', () => {
    const { container } = render(<TagList tags={[]} />);
    expect(container).toBeInTheDocument();
  });
});
