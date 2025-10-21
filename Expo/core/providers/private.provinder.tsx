import { router } from "expo-router";
import { useAppSelector } from "@/hooks/toolkit/redux";

export default function PrivateProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = useAppSelector(
    (state) => state.auth.currentUser?.user.token
  );
  const isAuth = currentUser;

  if (!isAuth) {
    router.push("/(auth)/login/page");
  }

  return <>{children}</>;
}
