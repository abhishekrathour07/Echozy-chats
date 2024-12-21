// themeContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the theme type
type Theme = "light" | "dark";

// Create context with default values
const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | undefined>(undefined);

// Define the type for the ThemeProvider's props
type ThemeProviderProps = {
  children: ReactNode;  // This tells TypeScript that `children` can be any React node (elements, strings, etc.)
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  // Update the HTML class and persist theme changes
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme); // Persist the theme
  }, [theme,toggleTheme]);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
