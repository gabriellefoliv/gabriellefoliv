import { projetos } from "@/lib/projetos";
import { ProjectCard } from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export function Projects() {
  return (
    <section id="projetos" className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center p-0 gap-2">
            <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white">
                Projetos em Destaque
            </h2>
            <p className="text-center text-zinc-700 font-semibold mb-4">Arraste para o lado ou movimente as setas para ver mais.</p>
        </div>

      <div className="relative px-6 sm:px-8 lg:px-10"> {/* Padding lateral aqui */}
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent className="flex gap-2">
            {projetos.map((proj, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center"
              >
                <div className="w-full max-w-sm p-2">
                  <ProjectCard
                    title={proj.title}
                    description={proj.description}
                    image={proj.image}
                    techStack={proj.techStack}
                    // github={proj.github}
                    demo={proj.demo}
                    caseLink={proj.caseLink}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-6 mt-6">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
      <p className="font-bold text-center mt-4 text-zinc-800">Link dos repositórios dentro dos estudos de caso! ☝️</p>
    </section>
  );
}
