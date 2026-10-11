import type { Metadata } from "next";
import { Certificates } from "@/components/certificates";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Certificates, technical achievements, and professional learning milestones earned by Bensingh.",
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <Certificates standalone />
    </main>
  );
}
