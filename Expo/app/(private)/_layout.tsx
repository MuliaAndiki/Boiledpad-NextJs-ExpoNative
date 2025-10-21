import PrivateProviders from "@/core/providers/private.provinder";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PrivateProviders>{children}</PrivateProviders>;
}
