import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Divergent',
  description: 'Explore our range of services for your business',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
