import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RMS | Divergent',
  description: 'Report Management System solutions for your business',
};

export default function RMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
