import { View, Text } from "react-native";
import { useThemeStyles } from "@/hooks/theme/useThemeStyle";

export function HomeScreen() {
  const { themeClasses, theme } = useThemeStyles();

  return (
    <View className={themeClasses.background + " flex-1 p-4"}>
      <Text className={themeClasses.text + " text-lg"}>
        Current Theme: {theme}{" "}
      </Text>
      <View className={themeClasses.card + " p-4 mt-4 rounded-lg"}>
        <Text className={themeClasses.cardText}>
          Card content akan berubah warna sesuai theme
        </Text>
      </View>
    </View>
  );
}
