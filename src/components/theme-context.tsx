import { createContext } from 'react';

export type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const initialState: ThemeContextType = {
  theme: 'light',
  setTheme: () => null,
};

export const ThemeContext = createContext<ThemeContextType>(initialState);
