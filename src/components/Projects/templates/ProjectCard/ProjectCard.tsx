import { CardButtons, CardCode, CardContainer, CardDescription, CardImg, CardLanguages, CardLiveSite, CardTitle } from "./ProjectCardStyle"

interface ProjectCardProps {
    Screenshot: any,
    Title: string,
    Description: string,
    Technologies: string
    Site: any
    Code: any
}

function ProjectCard({Screenshot, Title, Description, Technologies, Site, Code}:ProjectCardProps) {
    return(
        <CardContainer>
            <CardImg src={Screenshot}/>
            <CardTitle>{Title}</CardTitle>
            <CardDescription>
                {Description}
            </CardDescription>
            <CardLanguages>{Technologies}</CardLanguages>
            <CardButtons>
                <CardLiveSite href={Site} target='_blank'>Abra site</CardLiveSite>
                <CardCode href={Code} target='_blank'>Código</CardCode>
            </CardButtons>

        </CardContainer>
    )
}

export default ProjectCard