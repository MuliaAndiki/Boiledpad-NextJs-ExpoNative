import HomeSection from "@/components/section/public/home/page-section";
import { View } from "react-native";

const HomeContainer = () => {
  return (
    <View className="w-full min-h-screen flex flex-col">
      <HomeSection />
    </View>
  );
};

export default HomeContainer;
