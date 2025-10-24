import { useTheme } from "@/core/providers/theme.provinder";

export function useThemeStyles() {
  const { colors, theme } = useTheme();

  const cn = (lightClass: string, darkClass: string) => {
    return theme === "dark" ? darkClass : lightClass;
  };

  const themeClasses = {
    background: cn("bg-[#F5EAFF]", "bg-[#1A1A1A]"),

    text: cn("text-[#911DEC]", "text-[#F5EAFF]"),
    textMuted: cn(
      "text-[rgba(145,29,236,0.6)]",
      "text-[rgba(245,234,255,0.6)]"
    ),

    card: cn("bg-white", "bg-[#2A2A2A]"),
    cardText: cn("text-[#911DEC]", "text-[#F5EAFF]"),

    primary: cn("bg-[#911DEC]", "bg-[#911DEC]"),
    primaryText: cn("text-[#F5EAFF]", "text-[#F5EAFF]"),

    secondary: cn("bg-[#F5EAFF]", "bg-[#2A2A2A]"),
    secondaryText: cn("text-[#911DEC]", "text-[#F5EAFF]"),

    border: cn(
      "border-[rgba(145,29,236,0.2)]",
      "border-[rgba(245,234,255,0.1)]"
    ),

    input: cn(
      "bg-transparent border-[rgba(145,29,236,0.2)]",
      "bg-transparent border-[rgba(245,234,255,0.15)]"
    ),
  };

  return {
    colors,
    theme,
    cn,
    themeClasses,
    isDark: theme === "dark",
  };
}
