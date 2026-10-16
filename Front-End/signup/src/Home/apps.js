import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './style.css'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

function apps() {
    return (
        <ThemeProvider>
            <div className="App">
                <h1>Hello, World!</h1>
                <ThemeToggle />
            </div>
        </ThemeProvider>
    );
}

export default apps;
