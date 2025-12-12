import { Link } from "expo-router";
import {
  ArrowRight,
  Home as HomeIcon,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react-native";
import { ScrollView,View } from "react-native";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useTheme } from "@/core/providers/theme.provinder";

export default function SectionHomePage() {
  const { colors, isDark } = useTheme();

  return (
    <ScrollView
      className={`flex-1 ${isDark ? "bg-gray-900" : "bg-white"}`}
      style={{ backgroundColor: colors.background }}
    >
      <View className="p-6 space-y-6">
        <View className="items-center py-8">
          <View
            className={`w-20 h-20 rounded-full items-center justify-center mb-4 ${
              isDark ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <HomeIcon size={40} color={colors.primary} />
          </View>
          <Text className="text-4xl font-bold text-center mb-2">Welcome</Text>
          <Text className="text-lg text-center text-gray-500 dark:text-gray-400 mb-6">
            Build amazing apps with Expo & React Native
          </Text>

          <Button className="w-full max-w-sm">
            <Link href={"/(auth)/login/page"}>
              <Text className="text-white font-semibold text-base">
                Get Started
              </Text>
            </Link>
            <ArrowRight size={20} color="white" className="ml-2" />
          </Button>
        </View>

        <View className="space-y-4">
          <Text className="text-2xl font-bold mb-2">Features</Text>

          <Card
            className={
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }
          >
            <CardContent className="pt-6">
              <View className="flex-row items-start">
                <View
                  className={`w-12 h-12 rounded-full items-center justify-center ${
                    isDark ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <Zap size={24} color={colors.primary} />
                </View>
                <View className="ml-4 flex-1">
                  <Text className="text-lg font-semibold mb-1">
                    Lightning Fast
                  </Text>
                  <Text className="text-gray-600 dark:text-gray-400">
                    Built with performance in mind. Experience smooth and
                    responsive UI.
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>

          <Card
            className={
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }
          >
            <CardContent className="pt-6">
              <View className="flex-row items-start">
                <View
                  className={`w-12 h-12 rounded-full items-center justify-center ${
                    isDark ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <Shield size={24} color={colors.primary} />
                </View>
                <View className="ml-4 flex-1">
                  <Text className="text-lg font-semibold mb-1">
                    Secure & Private
                  </Text>
                  <Text className="text-gray-600 dark:text-gray-400">
                    Your data is protected with industry-standard security
                    measures.
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>

          <Card
            className={
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }
          >
            <CardContent className="pt-6">
              <View className="flex-row items-start">
                <View
                  className={`w-12 h-12 rounded-full items-center justify-center ${
                    isDark ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <Smartphone size={24} color={colors.primary} />
                </View>
                <View className="ml-4 flex-1">
                  <Text className="text-lg font-semibold mb-1">
                    Cross-Platform
                  </Text>
                  <Text className="text-gray-600 dark:text-gray-400">
                    Works seamlessly on iOS, Android, and Web platforms.
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>

        <View className="space-y-4">
          <Text className="text-2xl font-bold mb-2">Built With</Text>
          <Card
            className={
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }
          >
            <CardContent className="pt-6">
              <View className="flex-row flex-wrap gap-2">
                {[
                  "Expo Router",
                  "React Native",
                  "NativeWind",
                  "TypeScript",
                  "Redux Toolkit",
                  "React Query",
                  "Lucide Icons",
                  "AsyncStorage",
                ].map((tech) => (
                  <View
                    key={tech}
                    className={`px-4 py-2 rounded-full ${
                      isDark ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <Text className="text-sm font-medium">{tech}</Text>
                  </View>
                ))}
              </View>
            </CardContent>
          </Card>
        </View>

        <Card
          className={`${
            isDark
              ? "bg-gradient-to-r from-purple-900 to-indigo-900"
              : "bg-gradient-to-r from-purple-100 to-indigo-100"
          } border-0`}
        >
          <CardContent className="pt-6">
            <Text className="text-xl font-bold mb-2 text-center">
              Ready to get started?
            </Text>
            <Text className="text-center text-gray-600 dark:text-gray-300 mb-4">
              Sign in to access all features and start building
            </Text>
            <Button variant="secondary" className="w-full">
              <Text className="font-semibold text-base">Sign In Now</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
