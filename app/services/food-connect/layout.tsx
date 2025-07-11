import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Food Connect | Divergent',
  description: 'Food Connect service for restaurants and food businesses',
};

export default function FoodConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
