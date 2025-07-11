import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hardware | Divergent',
  description: 'POS Hardware solutions for your business',
};

export default function HardwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
