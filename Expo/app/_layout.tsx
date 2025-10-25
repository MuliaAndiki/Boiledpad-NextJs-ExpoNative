import "@/styles/global.css";

import { Stack } from "expo-router";

import ThemeToggle from "@/components/ui/toggleTheme";
import { useTheme } from "@/core/providers/theme.provinder";

import { AppProviders } from "./provinder";

function RootLayoutContent() {
  const { colors, isDark } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? colors.card : colors.background,
        },
        headerTintColor: colors.text,
        headerRight: () => <ThemeToggle />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(public)/home/page"
        options={{
          title: "Home",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="(auth)/login/page"
        options={{
          title: "Sign In",
          headerShown: true,
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="(private)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AppProviders>
      <RootLayoutContent />
    </AppProviders>
  );
}
