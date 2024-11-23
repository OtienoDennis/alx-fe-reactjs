import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  test('Initial Render - Renders demo todos', () => {
    render(<TodoList />);
    
    const todos = screen.getAllByRole('listitem');
    expect(todos).toHaveLength(4); // Check for 4 initial todos
    expect(screen.getByText('Cook Food')).toBeInTheDocument();
    expect(screen.getByText('Buy Food')).toBeInTheDocument();
    expect(screen.getByText('Go to School')).toBeInTheDocument();
    expect(screen.getByText('Call Mom')).toBeInTheDocument();
  });

  test('Adding Todos', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');
    
    // Simulate adding a new todo
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
    const todos = screen.getAllByRole('listitem');
    expect(todos).toHaveLength(5); // Ensure new todo was added
  });

  test('Toggling Todos', () => {
    render(<TodoList />);
    const todo = screen.getByText('Cook Food');

    // Check initial state
    expect(todo).not.toHaveStyle('text-decoration: line-through');

    // Toggle todo
    fireEvent.click(todo);

    // Verify toggled state
    expect(todo).toHaveStyle('text-decoration: line-through');

    // Toggle back
    fireEvent.click(todo);

    // Verify reverted state
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  test('Deleting Todos', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('X')[0]; // Select first delete button

    // Ensure initial todos length
    let todos = screen.getAllByRole('listitem');
    expect(todos).toHaveLength(4);

    // Delete first todo
    fireEvent.click(deleteButton);

    // Verify reduced todo count
    todos = screen.getAllByRole('listitem');
    expect(todos).toHaveLength(3);

    // Verify first todo is deleted
    expect(screen.queryByText('Cook Food')).not.toBeInTheDocument();
  });
});
