import {createBrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import {useState} from 'react';

function App () {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState( false );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route
          path="/profile/"
          element={
            <ProtectedRoute isAuthenticated={isUserLoggedIn}>
              <Profile />
            </ProtectedRoute>} />
      </Routes>
   </Router>
  )
}

export default App
