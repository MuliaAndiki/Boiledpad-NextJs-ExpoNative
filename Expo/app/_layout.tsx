import "@/styles/global.css";
import { Stack } from "expo-router";
import { AppProviders } from "./provinder";

export default function RootLayout() {
  return (
    <AppProviders>
      <Stack />
    </AppProviders>
  );
}
