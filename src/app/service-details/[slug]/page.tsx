import { notFound } from 'next/navigation';
import { getServiceDetail, serviceDetailsContent } from '@/data/serviceDetailsContent';
import ServiceDetailContent from './ServiceDetailContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return serviceDetailsContent.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return { title: 'Service Details' };

  return {
    title: `${service.title} | Municipal Services`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();

  return <ServiceDetailContent service={service} />;
}
