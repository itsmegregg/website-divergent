import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Commerce | Divergent',
  description: 'E-Commerce solutions for your business',
};

export default function ECommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
