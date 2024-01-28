import { ProjText, ProjectCardContainer, ProjectContainer, SubTitle, Title } from "./Projects-style"
import ProjectCard from "./templates/ProjectCard/ProjectCard"
// import Test from '../../assets/project-img3.png'
// import BgMiddlePic from '../../assets/BackgroundMiddle.png'
import Easybank from '../../assets/easybank.png'
import Advocacia from '../../assets/thamirisadv.png'


function Projects () {
    return (
        <ProjectContainer id='projects'>
            <ProjText>
                <Title>Projetos</Title>
                <SubTitle>Veja alguns projetos pessoais que eu desenvolvi.</SubTitle>
            </ProjText>
            {/* <BgMiddle src={BgMiddlePic}/> */}
            <ProjectCardContainer>
                <ProjectCard 
                    Screenshot={Easybank} 
                    Title="Easybank Landing Page" 
                    Description="Um desafio de Frontend Mentor em que eu fui capaz de brincar com animações nos cards embaixo, assim como explorei a responsividade do site, adaptando-o para celulares e tablets." 
                    Technologies="TypeScript Styled-Components" 
                    Site="https://easybank-gabsfo12.vercel.app/"
                    Code="https://github.com/gabriellefoliv/easybank-landing-page"
                
                />
                <ProjectCard 
                    Screenshot={Advocacia} 
                    Title="Thamiris Ferreira Advocacia" 
                    Description="O site feito para um escritório de advocacia contém as telas de início, equipe, áreas de atuação e contato, com um formulário que liga direto no Gmail da cliente.
                    Responsivo para celulares, tablets e computadores" 
                    Technologies="TypeScript Styled-Components EmailJS" 
                    Site="https://thamirisferreiraadv.vercel.app/"
                    Code="https://github.com/gabriellefoliv/advocacia-especializada"
                
                />
                
            </ProjectCardContainer>
        </ProjectContainer>
    )
}

export default Projects