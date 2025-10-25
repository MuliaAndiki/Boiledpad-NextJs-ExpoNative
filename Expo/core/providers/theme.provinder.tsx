import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

import { themeConfig } from "@/config/theme.config";

type Theme = "light" | "dark";

interface FlatColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  text: string;
  textSecondary: string;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: FlatColors;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Get colors based on current theme and flatten them
  const themeColors = themeConfig[theme];
  const colors: FlatColors = {
    background: themeColors.background,
    foreground: themeColors.foreground,
    card: themeColors.card.background,
    cardForeground: themeColors.card.foreground,
    popover: themeColors.popover.background,
    popoverForeground: themeColors.popover.foreground,
    primary: themeColors.primary.background,
    primaryForeground: themeColors.primary.foreground,
    secondary: themeColors.secondary.background,
    secondaryForeground: themeColors.secondary.foreground,
    muted: themeColors.muted.background,
    mutedForeground: themeColors.muted.foreground,
    accent: themeColors.accent.background,
    accentForeground: themeColors.accent.foreground,
    destructive: themeColors.destructive.background,
    destructiveForeground: themeColors.destructive.foreground,
    border: themeColors.border,
    input: themeColors.input,
    ring: themeColors.ring,
    text: themeColors.foreground,
    textSecondary: theme === 'dark' ? 'rgba(245, 234, 255, 0.6)' : 'rgba(145, 29, 236, 0.6)',
  };

  useEffect(() => {
    const initTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("theme");
        if (storedTheme) {
          setTheme(storedTheme as Theme);
        } else {
          // Use system theme if no stored preference
          setTheme(systemColorScheme === "dark" ? "dark" : "light");
        }
      } catch (error) {
        console.error("Error loading theme:", error);
        setTheme(systemColorScheme === "dark" ? "dark" : "light");
      } finally {
        setMounted(true);
      }
    };

    initTheme();
  }, [systemColorScheme]);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem("theme", newTheme);
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  };

  if (!mounted) {
    // Return loading state while theme is loading
    return null;
  }

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
    colors,
    isDark: theme === "dark",
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
