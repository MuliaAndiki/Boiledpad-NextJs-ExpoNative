import { router } from "expo-router";
import { useAppSelector } from "@/hooks/toolkit/redux";
import { useEffect } from "react";

export default function PrivateProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = useAppSelector(
    (state) => state.auth.currentUser?.user.token
  );
  const isAuth = currentUser;

  // useEffect(() => {
  //   if (!isAuth) {
  //     // Redirect to login if not authenticated
  //     router.replace("/(auth)/login" as any);
  //   }
  // }, [isAuth]);

  return <>{children}</>;
}
