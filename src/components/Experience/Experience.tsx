import { ExperienceCardContainer, ExperienceContainer, ExperienceTitle } from "./ExperienceStyle"
import ExperienceCard from "./templates/ExperienceCard/ExperienceCard"
import SerraIcon from '../../assets/10743860800.png'


function Experience() {
    return (
        
        <ExperienceContainer id='experience'>
            <ExperienceTitle>Experiência</ExperienceTitle>
            <ExperienceCardContainer>
                <ExperienceCard 
                    Logo={SerraIcon} 
                    Title="Membro de Computação - Serra Júnior Engenharia"
                    Date="Maio 2023 - Momento"
                    Description="Empresa Júnior fundada na UERJ. Participo de projetos da empresa e faço parte da equipe de Marketing, trabalhando na produção de conteúdo."    
                />
            </ExperienceCardContainer>
        
        </ExperienceContainer>
    )
}

export default Experience