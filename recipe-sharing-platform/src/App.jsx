import React from 'react';
import HomePage from './components/HomePage';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <HomePage />
            <AddRecipeForm />
          </>
        } />
        <Route path='/recipe/:id' element={<RecipeDetail />} />
      </Routes>
    </Router>
  )
}