import React from 'react';
import NavBar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/themeContext';
import ThemeToggle from './components/themeToggle';
import AutherContextProvider from './contexts/authContext';
import BookContextProvider from './contexts/bookContext';

function App() {
  return (
    <div className="App">
      <AutherContextProvider>
        <ThemeContextProvider>
          <ThemeToggle />
          <NavBar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        </ThemeContextProvider>
      </AutherContextProvider>
    </div>
  );
}

export default App;
