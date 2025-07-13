import { caseStudies } from "@/lib/caseStudies";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// SEO dinâmico
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const project = caseStudies.find((p) => p.slug === params.slug);

//   if (!project) return {};

//   return {
//     title: `${project.title} | Gabrielle Oliveira`,
//     description: project.description,
//     openGraph: {
//       title: project.title,
//       description: project.description,
//       images: [
//         {
//           url: project.image,
//           width: 800,
//           height: 400,
//           alt: project.title,
//         },
//       ],
//     },
//   };
// }

export default function CaseStudyPage({ params }: Props) {
  const project = caseStudies.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return <CaseStudyLayout {...project} />;
}
