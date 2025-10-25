import { View } from "react-native";

import HomeSection from "@/components/section/public/home/page-section";

const HomeContainer = () => {
  return (
    <View className="w-full min-h-screen flex flex-col">
      <HomeSection />
    </View>
  );
};

export default HomeContainer;
