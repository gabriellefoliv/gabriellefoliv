import { experienceData } from "@/lib/experiences";
import { Timeline } from "./ui/timeline";

export function Experience() {
  return <Timeline data={experienceData} />;
}
