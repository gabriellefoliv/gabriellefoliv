export const caseStudies = [
  {
    slug: "hidra",
    title: "Hidra",
    images: ["/hidra/hidra.png", "/hidra/hidra-2.png", "/hidra/hidra-3.png", "/hidra/hidra-4.png", "/hidra/hidra-5.png", "/hidra/hidra-6.png", "/hidra/hidra-7.png"],
    techStack: ["React.js", "Tailwind", "PostgreSQL", "Prisma"],
    description: [
      "O Hidra é uma plataforma para gestão de projetos de Comitês de Bacia Hidrográfica, que lida com o projeto desde a criação dele, até a sua avaliação pelo comitê e sua execução com o envio dos pagamentos pelos serviços sendo realizados.",
      "Os pagamentos são gerenciados na Blockchain, garantindo transparência e segurança nas transações."
    ],
    problem: [
      "O problema inicial que a Hidra se propôs a resolver era a falta de transparência no pagamento dos serviços pela execução dos projetos do comitê.",
      "Além disso, a falta de uma plataforma centralizada para gerenciar os projetos e suas etapas dificultava a colaboração entre os membros do comitê.",
      "A gestão de dados era fragmentada, o que tornava difícil o acompanhamento do progresso dos projetos e a tomada de decisões informadas."
    ],
    solution: [
      "A solução desenvolvida foi uma aplicação web robusta, que centraliza a gestão de dados e oferece uma interface de usuário simplificada.",
      "Implementamos um sistema de painéis para diferentes perfis de usuários, otimizando a experiência do usuário."
    ],
    impact: [
      "O impacto da Hidra será a melhoria na transparência e eficiência dos processos de pagamento, aumentando a confiança dos usuários na plataforma.",
      "Além disso, a plataforma facilitará a colaboração entre os membros do comitê, permitindo um acompanhamento mais eficaz dos projetos."
    ],
    githubFrontend: "https://github.com/gabriellefoliv/hidrraa",
    githubBackend: "https://github.com/gabriellefoliv/api-hidrraa",
    // demo: "https://github.com/gabriellefoliv/hidra",
  },
  {
    slug: "sigcol",
    title: "Sigcol - App de Gameficação",
    images: ["/sigcol.png"],
    techStack: ["Expo", "Node", "MySQL"],
    description: [
      "Para clientes de uma empresa de compostagem - Organokits -, o app oferece uma plataforma de gamificação para incentivar a coleta de resíduos orgânicos.",
      "Através de mecânicas de jogo, o Sigcol transforma uma tarefa rotineira em uma experiência divertida e recompensadora."
    ],
    problem: [
      "O app veio para resolver a dificuldade de engajamento dos clientes na coleta de resíduos orgânicos, oferecendo uma experiência lúdica e recompensadora.",
      "A baixa adesão a programas de reciclagem e compostagem era um desafio, e o Sigcol buscou uma forma inovadora de mudar esse cenário.",
      "Quanto mais o cliente coleta resíduos, mais pontos ele ganha, podendo trocá-los por prêmios."
    ],
    solution: [
      "O app utiliza uma abordagem de gameficação, onde os usuários podem acompanhar seu progresso na coleta de resíduos e ganhar recompensas por suas ações.",
      "Não só isso, mas ele também consegue somar pontos com jogos diários, onde ele pode responder uma pergunta do quiz por dia e também cuidar de uma planta, regando-a de acordo com o período de tempo que ela precisa.",
      "A integração de elementos de jogo como quizzes e o cuidado com uma planta virtual mantêm o usuário engajado diariamente."
    ],
    impact: [
      "O impacto do app é significativo, pois não só aumenta o engajamento dos clientes na coleta de resíduos, mas também promove a conscientização sobre a importância da sustentabilidade e da reciclagem.",
      "Os clientes conseguem trocar seus pontos por cupons no Reciclotron e todo dia é feito o ranking com a pontuação geral do pessoal.",
    ],
    githubFrontend: "https://github.com/gabriellefoliv/coleta-premiada",
    githubBackend: "https://github.com/gabriellefoliv/api-sigcol",
  },
  {
    "slug": "encurtador-url",
    "title": "Chop Chop - Encurtador de URL",
    "images": ["/chop-chop.png"],
    "techStack": ["AWS Lambda", "AWS DynamoDB", "Next.JS", "Vercel", "TypeScript", "Tailwind CSS"],
    "description": [
      "Este é um encurtador de URL robusto e eficiente, desenvolvido para praticar e demonstrar conceitos essenciais de arquitetura serverless e desenvolvimento full-stack na AWS.",
      "A ferramenta oferece uma solução rápida e confiável para transformar URLs longas em links curtos e gerenciáveis, otimizando o compartilhamento e a análise de acesso."
    ],
    "problem": [
      "No cenário digital atual, URLs longas e complexas são comuns, dificultando o compartilhamento em plataformas com limitação de caracteres e comprometendo a estética.",
      "Além disso, a ausência de um mecanismo de rastreamento de cliques impede a obtenção de insights sobre o engajamento do usuário com os links compartilhados, tornando o gerenciamento e a otimização de campanhas menos eficientes."
    ],
    "solution": [
      "A solução foi o desenvolvimento do 'Chop Chop', um serviço de encurtamento de URL serverless de ponta a ponta. O backend é construído com AWS Lambda (Node.js/TypeScript) para a lógica de negócio e AWS DynamoDB para persistência de dados, garantindo escalabilidade e alta disponibilidade.",
      "A escolha estratégica das Lambda Function URLs para exposição minimiza custos operacionais, eliminando a necessidade de API Gateway para este caso de uso. A geração de IDs curtos é robusta, utilizando UUIDs com `ConditionExpression` no DynamoDB para garantir unicidade e atomicidade, mesmo sob concorrência.",
      "O frontend, desenvolvido em Next.js com TypeScript e estilizado com Tailwind CSS, oferece uma interface intuitiva e responsiva. A implantação na Vercel, com a configuração de Rewrites, permite que as URLs encurtadas utilizem o domínio do frontend, proporcionando uma experiência de usuário limpa e profissional."
    ],
    "impact": [
      "O 'Chop Chop' simplifica drasticamente o compartilhamento de links, melhorando a experiência do usuário e a clareza da comunicação digital.",
      "A arquitetura serverless resultou em um custo operacional significativamente baixo, ideal para um projeto de portfólio e demonstrando proficiência em otimização de recursos em nuvem.",
      "A robustez na geração de IDs e o rastreamento de cliques (incremento assíncrono no DynamoDB) fornecem uma base para futuras análises de engajamento, destacando a capacidade de construir soluções completas e prontas para o crescimento."
    ],
    "githubFrontend": "https://github.com/gabriellefoliv/url-shortener-aws",
    "demo": "https://chop-chop-url.vercel.app"
  },
  {
    slug: "thamiris-advocacia",
    title: "Thamiris F. de Oliveira - Escritório de Advocacia",
    images: ["/thamiris-adv/thamiris-advocacia.png", "/thamiris-adv/thamiris-advocacia-contato.png"],
    techStack: ["Next.js", "Tailwind"],
    description: [
      "Website desenvolvido para o escritório de advocacia da Thamiris, com foco em apresentar os serviços e facilitar o contato com os clientes.",
      "A plataforma foi projetada para ser intuitiva e acessível, refletindo a seriedade e profissionalismo do escritório."
    ],
    problem: [
      "A dificuldade de clientes em encontrar informações sobre os serviços oferecidos e entrar em contato com o escritório.",
      "A ausência de uma presença online consolidada limitava o alcance e a aquisição de novos clientes."
    ],
    solution: [
      "Um site institucional que apresenta os serviços de forma clara e objetiva, com um formulário de contato fácil de usar.",
      "A estrutura do site foi pensada para guiar o usuário de forma fluida, desde a descoberta dos serviços até o contato inicial."
    ],
    impact: [
      "O impacto do site é significativo, pois facilita a comunicação dos clientes com o escritório e melhora a visibilidade dos serviços oferecidos.",
      "O site também conta com SEO direcionado e landing pages para cada serviço, aumentando a chance de conversão.",
      "Isso resultou em um aumento de consultas e na base de clientes do escritório."
    ],
    githubFrontend: "https://github.com/gabriellefoliv/thamiris-advocacia",
    demo: "https://thamirisferreiraadv.com.br"
  },
  {
    slug: "instituto-transformacao",
    title: "Instituto Transformação",
    images: ["/jiujitsu/instituto-transformacao.png", "/jiujitsu/instituto-2.png", "/jiujitsu/instituto-3.png"],
    techStack: ["Next.js", "Tailwind", "Stripe"],
    description: [
      "Website para divulgação do Instituto Transformação - projeto social com sede na faculdade - com espaço para doações feito com Stripe.",
      "A plataforma serve como um hub central para informações sobre as iniciativas do Instituto e facilita o apoio financeiro."
    ],
    problem: [
      "O website foi criado para resolver a falta de visibilidade do projeto social e facilitar o processo de doação.",
      "A dificuldade em alcançar potenciais doadores e a burocracia nas contribuições eram obstáculos significativos."
    ],
    solution: [
      "Uma plataforma que conecta doadores a projetos sociais, facilitando o processo de doação e acompanhamento dos resultados, assim como divulga as atividades que são realizadas pelo Instituto.",
      "A integração com Stripe garante um processo de doação seguro e eficiente, incentivando mais contribuições."
    ],
    impact: [
      "O impacto da plataforma é significativo, pois aumenta a visibilidade dos projetos sociais e facilita o acesso a recursos financeiros.",
      "A transparência nas doações e a facilidade de uso impulsionaram o engajamento da comunidade e o suporte ao Instituto.",
      "(Repositório privado)"
    ],
    // githubFrontend: "https://github.com/serra-jr-engenharia/projetotransformacaobjj",
    // demo: "https://github.com/gabriellefoliv/hidra",
  },
  {
    slug: "isoas",
    title: "ISOAS - Gestão de aterros sanitários",
    images: ["/isoas-app.png", "/isoas-app.png"],
    techStack: ["Expo", "SQLite"],
    description: [
      "Aplicativo para gestão de aterros sanitários, com funcionalidades para cadastro de resíduos, controle de entrada e saída, e geração de relatórios.",
      "O ISOAS oferece uma solução completa para otimizar as operações e a fiscalização de aterros."
    ],
    problem: [
      "A falta de controle e gestão dos resíduos sólidos nos aterros sanitários, dificultando a fiscalização e o planejamento.",
      "Dados fragmentados e a ausência de um sistema unificado resultavam em ineficiências e riscos ambientais."
    ],
    solution: [
      "Uma plataforma que permite o cadastro e acompanhamento dos resíduos, facilitando a gestão e a tomada de decisões.",
      "O aplicativo fornece relatórios detalhados e insights em tempo real para uma gestão mais eficiente."
    ],
    impact: [
      "O impacto do aplicativo é significativo, pois melhora a gestão dos resíduos sólidos e facilita a fiscalização dos aterros sanitários.",
      "Isso contribui para a conformidade regulatória, a redução de impactos ambientais e a otimização de custos operacionais."
    ],
    // githubFrontend: "https://github.com/gabriellefoliv/hidra",
    demo: "https://play.google.com/store/apps/details?id=com.vphix.isoas&pli=1",
  },
];