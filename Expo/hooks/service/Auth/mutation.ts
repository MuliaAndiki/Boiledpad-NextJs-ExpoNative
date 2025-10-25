import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { Alert } from "react-native";

import { TResponse } from "@/pkg/react-query/mutation-wrapper.type";
import Api from "@/service/props.service";
import { FormLogin } from "@/types/form";

export function useLogin() {
  return useMutation<TResponse<any>, Error, FormLogin>({
    mutationFn: (payload) => Api.Auth.Login(payload),
    onSuccess: (res) => {
      console.log(res);
      Alert.alert("Sukses", "Login berhasil!");

      router.push("/(public)/home/_container/home");
    },
    onError: (err) => {
      console.error(err);
    },
  });
}
