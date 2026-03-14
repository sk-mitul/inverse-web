import React, { use, useEffect, useState } from 'react';
import { ThemeContext } from "../context";
import { Sun, Moon } from 'lucide-react';

const Themes = ["light", "dark"];

// Icon Mapping
export const ThemeIcons = {
  light: <Sun size={18} strokeWidth={2.5} />,
  dark: <Moon size={18} strokeWidth={2.5} />,
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const handleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Apply to both data-theme (for your CSS vars) and .dark (for Tailwind)
    root.dataset.theme = theme;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ handleTheme, theme, Themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => use(ThemeContext);
export default ThemeProvider;