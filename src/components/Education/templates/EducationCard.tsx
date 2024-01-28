import { EducationCardCont, EducationCardDate, EducationCardText, EducationCardTitle, EducationLogo } from "./EducationCardStyle"

interface EducationCardProps {
    Logo: any,
    Title: string,
    Date: string
}

function EducationCard({Logo, Title, Date}:EducationCardProps) {
    return (
        <EducationCardCont>
            <EducationLogo src={Logo}/>
            <EducationCardText>
                <EducationCardTitle>{Title}</EducationCardTitle>
                <EducationCardDate>{Date}</EducationCardDate>
            </EducationCardText>
        </EducationCardCont>
    )
}

export default EducationCard