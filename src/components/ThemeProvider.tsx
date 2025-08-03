import { useEffect, useState, ReactNode } from 'react';
// import { ThemeContext } from './theme-context';
import { ThemeContext } from './theme-context.tsx';

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: string;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {

  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the old theme class
    root.classList.remove('light', 'dark');
    
    // Add the new theme class
    root.classList.add(theme);
    
    // Update localStorage
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  // Force light theme on page reload
  useEffect(() => {
    // This will run only on component mount (page load)
    setTheme('light');
  }, []);

  const value = {
    theme,
    setTheme: (theme: string) => {
      setTheme(theme);
    },
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
