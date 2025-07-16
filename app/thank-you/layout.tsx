import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Divergent Technologies Philippines",
  description: "Thank you for contacting Divergent Technologies Philippines. We've received your message and will be in touch soon.",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
