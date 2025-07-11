import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Retail Assist | Divergent',
  description: 'Retail Assist solutions for your business',
};

export default function RetailAssistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
