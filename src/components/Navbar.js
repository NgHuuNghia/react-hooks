import React, { useContext, lazy } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import { AuthContext } from '../contexts/authContext';
import withInformation from '../hoc/withInformation';
const About = lazy( () => import('../components/About'));
const Contact = lazy( () => import('../components/Contact'));

const InforAbout = withInformation(About,{title: 'About'});
const InforContact = withInformation(Contact, {title: 'Contact'});

const Navbar = () => {

    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const {theme} = useContext(ThemeContext);
    const typeTheme = theme.isLightTheme ? theme.light : theme.dark;
    return (
        <nav style={{ background: typeTheme.ui, color: typeTheme.syntax }}>
            <h1>Book App</h1>
            <h2 style={{ color: "red" }} onClick={toggleAuth}> {isAuthenticated ? 'Log In' : 'Log Out'} </h2>
            <ul>
                <InforAbout/>
                <InforContact/>
            </ul>
        </nav>
    );
}

export default Navbar;