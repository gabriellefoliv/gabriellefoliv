import { ExperienceCardCont, ExperienceCardDates, ExperienceCardDescription, ExperienceCardText, ExperienceCardTitle, ExperienceLogo } from "./ExperienceCardStyle";

interface ExperienceCardProps {
    Logo: any,
    Title: string,
    Date: string,
    Description: string
}

function ExperienceCard({Logo, Title, Date, Description}:ExperienceCardProps) {

    return (
        <ExperienceCardCont>
            <ExperienceLogo src={Logo}/>
            <ExperienceCardText>
                <ExperienceCardTitle>{Title}</ExperienceCardTitle>
                <ExperienceCardDates>{Date}</ExperienceCardDates>
                <ExperienceCardDescription>{Description}</ExperienceCardDescription>
            </ExperienceCardText>
        </ExperienceCardCont>
    )
}

export default ExperienceCard