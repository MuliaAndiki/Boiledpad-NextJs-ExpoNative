"use client";

import { store, persistor } from "@/stores/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryClientProvider } from "@/pkg/react-query/query-client.pkg";
import { composeProviders } from "./composeProvinder";

const Providers = composeProviders([
  ({ children }) => <Provider store={store}>{children}</Provider>,
  ({ children }) => <PersistGate persistor={persistor}>{children}</PersistGate>,
  ReactQueryClientProvider,
]);

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}
