import { caseStudies } from "@/lib/caseStudies";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const project = caseStudies.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyLayout {...project} />;
}
