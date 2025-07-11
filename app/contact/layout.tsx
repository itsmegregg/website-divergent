import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Divergent',
  description: 'Get in touch with our team',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
