import { Timeline } from "./ui/timeline";
import { timelineData } from "@/lib/timeline";

export function Experience() {
  return (
    <section id="experiencia">  
      <Timeline data={timelineData} />
    </section>
  );
}
