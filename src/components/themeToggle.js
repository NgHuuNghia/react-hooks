import React, { useContext } from 'react';
import  { ThemeContext } from '../contexts/themeContext';
import { Button } from 'antd';

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext);

    return (  
        <Button style={{margin: "10px" }} type="primary" onClick={toggleTheme}>Toggle Theme</Button>
    );
}
 
export default ThemeToggle;