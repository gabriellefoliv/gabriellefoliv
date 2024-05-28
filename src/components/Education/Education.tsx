import EducationCard from "./templates/EducationCard"
import UERJLogo from '../../assets/logomarca-uerj.png'

function Education() {
    return(
        <div id='education' className="w-full relative z-50 overflow-hidden">
            <h2 className="text-center text-xl font-bold text-white">🎓 Educação</h2>
            <div className="w-full flex justify-center mt-5 p-4">
                <EducationCard
                    Logo={UERJLogo}
                    Title="Universidade do Estado do Rio de Janeiro"
                    Date="Início: 2023/1 "
                />
            </div>
        </div>
    )
}

export default Education