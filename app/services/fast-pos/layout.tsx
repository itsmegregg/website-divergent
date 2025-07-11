// app/services/fast-pos/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fast POS',
  description: 'Fast POS Page',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}