import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "@/core/providers/theme.provinder";
import { LogIn, Mail, Lock, Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";

import { Link } from "expo-router";
import { useAlert } from "@/hooks/useAlert/costum-alert";

export default function LoginPage() {
  const { colors, isDark } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const alert = useAlert();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView
        className={`flex-1 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
        style={{ backgroundColor: colors.background }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View className="p-6">
          <View className="items-center mb-8">
            <View
              className={`w-20 h-20 rounded-full items-center justify-center mb-4 ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <LogIn size={40} color={colors.primary} />
            </View>
            <Text className="text-3xl font-bold">Welcome Back</Text>
            <Text className="text-gray-500 dark:text-gray-400 mt-2">
              Sign in to continue to your account
            </Text>
          </View>

          <Card className={isDark ? "bg-gray-800 border-gray-700" : "bg-white"}>
            <CardHeader>
              <CardTitle className={isDark ? "text-slate-900" : "text-black"}>
                Sign In
              </CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <View className="space-y-4">
                <View>
                  <Text className="text-sm font-medium mb-2">Email</Text>
                  <View
                    className={`flex-row items-center border rounded-lg px-3 ${
                      isDark
                        ? "border-gray-600 bg-gray-700"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <Mail size={20} color={colors.textSecondary} />
                    <TextInput
                      className={`flex-1 py-3 px-3 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                      placeholder="john@example.com"
                      placeholderTextColor={colors.textSecondary}
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoComplete="email"
                    />
                  </View>
                </View>

                <View>
                  <Text className="text-sm font-medium mb-2">Password</Text>
                  <View
                    className={`flex-row items-center border rounded-lg px-3 ${
                      isDark
                        ? "border-gray-600 bg-gray-700"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <Lock size={20} color={colors.textSecondary} />
                    <TextInput
                      className={`flex-1 py-3 px-3 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                      placeholder="Enter your password"
                      placeholderTextColor={colors.textSecondary}
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                      autoCapitalize="none"
                      autoComplete="password"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onPress={() => setShowPassword(!showPassword)}
                      className="w-10 h-10"
                    >
                      {showPassword ? (
                        <EyeOff size={20} color={colors.textSecondary} />
                      ) : (
                        <Eye size={20} color={colors.textSecondary} />
                      )}
                    </Button>
                  </View>
                </View>

                <View className="items-end">
                  <Button
                    variant="link"
                    className="p-0"
                    onPress={() =>
                      alert.toast({
                        title: "Coming Soon!",
                        message: "Fitur reset password akan segera hadir",
                        icon: "success",
                      })
                    }
                  >
                    <Text className="text-sm" style={{ color: colors.primary }}>
                      Forgot Password?
                    </Text>
                  </Button>
                </View>

                <Button className="w-full mt-2">
                  <Link href={"/(private)/(tabs)/home/_container/home"}>
                    <Text className="text-white font-semibold text-base">
                      Masuk
                    </Text>
                  </Link>
                </Button>

                <View className="flex-row items-center my-4">
                  <View
                    className={`flex-1 h-px ${
                      isDark ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  />
                  <Text className="px-4 text-sm text-gray-500">or</Text>
                  <View
                    className={`flex-1 h-px ${
                      isDark ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  />
                </View>

                <View className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Text className="font-medium">Continue with Google</Text>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Text className="font-medium">Continue with Apple</Text>
                  </Button>
                </View>

                <View className="flex-row justify-center items-center mt-4">
                  <Text className="text-sm text-gray-500">
                    Don&apos;t have an account?{" "}
                  </Text>
                  <Button variant="link" className="p-0">
                    <Text
                      className="text-sm font-semibold"
                      style={{ color: colors.primary }}
                    >
                      Sign Up
                    </Text>
                  </Button>
                </View>
              </View>
            </CardContent>
          </Card>

          <Card
            className={`mt-4 ${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-blue-50 border-blue-200"
            }`}
          >
            <CardContent className="pt-4">
              <Text className="text-xs text-center text-gray-600 dark:text-gray-400">
                💡 Demo Mode: Enter any email and password to continue
              </Text>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
