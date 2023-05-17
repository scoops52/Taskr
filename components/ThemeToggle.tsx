'use client';
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { systemTheme, theme, setTheme } = useTheme();
   
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const handleToggle = () => {
        theme === "dark" ? setTheme('light'): setTheme("dark");
    }

  return (
    <button onClick={handleToggle}>Toggle Mode</button>
  )
}

export default ThemeToggle