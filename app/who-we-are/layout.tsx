import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are | Divergent',
  description: 'Learn about Divergent and our team',
};

export default function WhoWeAreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
