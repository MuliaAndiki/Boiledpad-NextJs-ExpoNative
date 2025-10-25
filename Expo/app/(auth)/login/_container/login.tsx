import { View } from "react-native";

import LoginSection from "@/components/section/auth/login/page-section";

const LoginContainer = () => {
  return (
    <View className="w-full min-h-screen flex flex-col">
      <LoginSection />
    </View>
  );
};

export default LoginContainer;
