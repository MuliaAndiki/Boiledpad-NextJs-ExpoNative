import { ScrollView,View } from "react-native";

import { Text } from "@/components/ui/text";
import { useTheme } from "@/core/providers/theme.provinder";

export default function HomePageSection() {
  const { colors, isDark } = useTheme();

  return (
    <ScrollView
      className={`flex-1 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      style={{ backgroundColor: colors.background }}
    >
      <View className="w-full justify-center items-center min-h-screen">
        <Text className="text-4xl font-bold text-center mb-2">Welcome</Text>
      </View>
    </ScrollView>
  );
}
