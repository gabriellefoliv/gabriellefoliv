import { caseStudies } from "@/lib/caseStudies";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = caseStudies.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return <CaseStudyLayout {...project} />;
}
