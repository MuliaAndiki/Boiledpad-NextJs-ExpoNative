import LoginSection from "@/components/section/auth/login/page-section";
import { View } from "react-native";

const LoginContainer = () => {
  return (
    <View className="w-full min-h-screen flex flex-col">
      <LoginSection />
    </View>
  );
};

export default LoginContainer;
