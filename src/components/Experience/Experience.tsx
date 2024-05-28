import ExperienceCard from "./templates/ExperienceCard"
import SerraIcon from '../../assets/10743860800.png'


function Experience() {
    return (
        
        <div id='experience' className="w-full mt-12 relative z-50 overflow-hidden">
            <h2 className="text-center text-xl font-bold text-white">🎯 Experiência</h2>
            <div className="w-full flex justify-center mt-5 p-4">
                <ExperienceCard 
                    Logo={SerraIcon} 
                    Title="Assessora de Computação - Serra Jr. Engenharia"
                    Date="Maio 2023 - Momento"
                    Description="Empresa Jr. fundada na UERJ. Contribuo na produção de treinamentos de capacitação de membros, assim como na gestão de projetos de computação."    
                />
            </div>
        
        </div>
    )
}

export default Experience