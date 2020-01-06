import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import { AuthContext } from '../contexts/authContext';

const Navbar = () => {

    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const {theme} = useContext(ThemeContext);
    const typeTheme = theme.isLightTheme ? theme.light : theme.dark;
    return (
        <nav style={{ background: typeTheme.ui, color: typeTheme.syntax }}>
            <h1>Book App</h1>
            <h2 style={{ color: "red" }} onClick={toggleAuth}> {isAuthenticated ? 'Log In' : 'Log Out'} </h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;