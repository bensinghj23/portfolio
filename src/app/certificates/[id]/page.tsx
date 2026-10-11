import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { certificates } from "@/data/certificates";
import { CertificateDetail } from "./certificate-detail";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return certificates.map((certificate) => ({ id: certificate.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const certificate = certificates.find((item) => item.id === id);

  if (!certificate) return {};

  return {
    title: `${certificate.title} | Certificates`,
    description: `${certificate.title}, issued by ${certificate.issuer} on ${certificate.date}.`,
    openGraph: {
      title: `${certificate.title} | Bensingh`,
      description: certificate.description,
      images: [{ url: certificate.image, alt: `${certificate.title} certificate` }],
    },
  };
}

export default async function CertificatePage({ params }: Props) {
  const { id } = await params;
  const certificate = certificates.find((item) => item.id === id);

  if (!certificate) notFound();

  return <CertificateDetail certificate={certificate} />;
}
