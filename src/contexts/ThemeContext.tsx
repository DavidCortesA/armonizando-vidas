import { createContext, useContext, useState, type ReactNode } from 'react';
import { type Theme, type ThemeKey, themes, mainTheme } from '../themes';

export type { ThemeKey };

interface ThemeContextValue {
  theme: Theme;
  themeKey: ThemeKey;
  setTheme: (key: ThemeKey) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: mainTheme,
  themeKey: 'main',
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeKey, setThemeKey] = useState<ThemeKey>('main');

  const setTheme = (key: ThemeKey) => setThemeKey(key);

  return (
    <ThemeContext.Provider value={{ theme: themes[themeKey], themeKey, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
