import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Divergent',
  description: 'Frequently Asked Questions about our products and services',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
