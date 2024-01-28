import { EducationCardContainer, EducationContainer, EducationTitle } from "./EducationStyle"
import EducationCard from "./templates/EducationCard"
import UERJLogo from '../../assets/logomarca-uerj.png'
// import BgBottom from '../../assets/BackgroundBottom.png'

function Education() {
    return(
        <EducationContainer id='education'>
            {/* <BgDown src={BgBottom}/> */}
            <EducationTitle>Educação</EducationTitle>
            <EducationCardContainer>
                <EducationCard
                    Logo={UERJLogo}
                    Title="Universidade do Estado do Rio de Janeiro"
                    Date="Início: 2023/1; Previsão de Graduação: 2027/2 "
                />
            </EducationCardContainer>
        </EducationContainer>
    )
}

export default Education