import React, { Suspense, lazy } from 'react';
import Loading from './components/shared/loading';
//context
import ThemeContextProvider from './contexts/themeContext';
import AutherContextProvider from './contexts/authContext';
import BookContextProvider from './contexts/bookContext';
//component
const NavBar = lazy( () => import('./components/Navbar'));
const BookList = lazy( () => import('./components/BookList'));
const ThemeToggle = lazy( () => import('./components/themeToggle')); 


function App() {
  return (
    <div className="App">
      <Suspense fallback = { <Loading/> }>
        <AutherContextProvider>
          <ThemeContextProvider>
            <ThemeToggle />
            <NavBar />
            <BookContextProvider>
              <BookList />
            </BookContextProvider>
          </ThemeContextProvider>
        </AutherContextProvider>
      </Suspense>

    </div>
  );
}

export default App;
