import { ProjectCard } from "./ProjectCard";


export function Projects() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
                Projetos em Destaque
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                    title="Hidra"
                    description="Plataforma focada na gestão de projetos de Comitês de Bacia Hidrográfica com integração à Blockchain"
                    image="/isoas-app.png"
                    techStack={["Vite","Tailwind","Node", "Fastify", "MySQL"]}
                    github="https://github.com/gabriellefoliv/api-hidrraa"
                    caseLink="/projetos/hidra"
                />

                <ProjectCard
                title="PPGCTM UERJ IPRJ"
                description="Sistema com login de admin, edição de cursos, usuários e notícias."
                image="/isoas-app.png"
                techStack={["Next.js", "Supabase", "Zod"]}
                github=""
                demo=""
                caseLink="/projetos/painel-admin"
                />

                <ProjectCard
                title="Instituto Transformação"
                description="Site institucional para evento da UERJ com design moderno e acessível."
                image="/isoas-app.png"
                techStack={["Vite", "Tailwind", "TypeScript"]}
                github=""
                demo=""
                caseLink="/projetos/site-uerj"
                />
                <ProjectCard
                    title="ISOAS"
                    description="Aplicativo para gestão de aterros sanitários"
                    image="/isoas-app.png"
                    techStack={["React Native", "Expo", "SQLite"]}
                    github="https://github.com/usuario/qrcode"
                    demo="https://qrcode-app.vercel.app"
                    caseLink="/projetos/qrcode-eventos"
                />

                <ProjectCard
                title="Rotas"
                description="App com quizzes de múltipla escolha, ranking e gamificação."
                image="/isoas-app.png"
                techStack={["Expo", "Express", "MongoDB"]}
                github="https://github.com/usuario/quiz"
                demo="https://quizapp.vercel.app"
                caseLink="/projetos/quiz-interativo"
                />

                <ProjectCard
                title="Thamiris Advocacia"
                description="Aplicativo com sistema de pontos por cuidar da planta."
                image="/isoas-app.png"
                techStack={["React Native", "Node.js", "SQLite"]}
                github="https://github.com/usuario/planta"
                demo=""
                caseLink="/projetos/planta-gamificada"
                />

            </div>
        </section>
    )
}