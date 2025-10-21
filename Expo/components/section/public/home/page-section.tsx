import { Link } from "expo-router";
import { Text, View } from "react-native";

const HomeSection = () => {
  return (
    <View className="w-full min-h-screen flex justify-center items-center ">
      <Link href={"/(auth)/login/page"}>
        <Text>Login</Text>
      </Link>
      <Text className="">INI Home Section</Text>
      <Text className="text-red-500">{process.env.BACKEND_URL}</Text>
    </View>
  );
};

export default HomeSection;
