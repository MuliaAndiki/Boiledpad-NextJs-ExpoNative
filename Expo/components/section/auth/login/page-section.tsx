"use client";
import { Text, TextInput, View } from "react-native";
import { useState } from "react";
import { FormLogin } from "@/types/form";
import { useLogin } from "@/hooks/service/Auth/mutation";
import { Button } from "react-native";

const LoginSection = () => {
  const login = useLogin();
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    login.mutate(formLogin);
  };
  return (
    <View className="flex justify-center items-center flex-col relative">
      <Text>Ini Login</Text>
      <TextInput
        placeholder="text"
        onChangeText={(e) => setFormLogin((prev) => ({ ...prev, email: e }))}
        value={formLogin.email}
        className="border"
      />
      <TextInput
        placeholder="text"
        className="border"
        onChangeText={(e) => setFormLogin((prev) => ({ ...prev, password: e }))}
      />
      <Button onPress={() => handleLogin()} title="Login" />
    </View>
  );
};

export default LoginSection;
