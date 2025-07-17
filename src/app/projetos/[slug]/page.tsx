import { caseStudies } from "@/lib/caseStudies";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};


export default function CaseStudyPage({ params }: Props) {
  const project = caseStudies.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return <CaseStudyLayout {...project} />;
}
