import React from "react";

type ProviderProps = { children: React.ReactNode };
type ProviderComponent = React.ComponentType<ProviderProps>;

export function composeProviders(providers: ProviderComponent[]) {
  return ({ children }: ProviderProps) =>
    providers.reduceRight((acc, Provider) => {
      return React.createElement(Provider, null, acc);
    }, children);
}
