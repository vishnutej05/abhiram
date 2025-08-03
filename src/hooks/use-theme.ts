import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../components/theme-context.tsx';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
