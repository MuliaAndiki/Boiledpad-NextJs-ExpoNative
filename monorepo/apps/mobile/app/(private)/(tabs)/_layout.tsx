import { Tabs } from "expo-router";
import { Home, Settings,User } from "lucide-react-native";
import { View } from "react-native";

import { useTheme } from "@/core/providers/theme.provinder";

export default function TabsLayout() {
  const { theme, colors, isDark } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: isDark ? colors.card : colors.background,
          borderTopColor: isDark ? colors.border : "#e5e7eb",
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              className={`items-center justify-center ${
                focused ? "opacity-100" : "opacity-70"
              }`}
            >
              <Home size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              className={`items-center justify-center ${
                focused ? "opacity-100" : "opacity-70"
              }`}
            >
              <User size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              className={`items-center justify-center ${
                focused ? "opacity-100" : "opacity-70"
              }`}
            >
              <Settings size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
