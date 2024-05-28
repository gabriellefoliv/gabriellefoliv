
interface EducationCardProps {
    Logo: any,
    Title: string,
    Date: string
}

function EducationCard({Logo, Title, Date}:EducationCardProps) {
    return (
        <div className="w-[1000px] md:px-4 py-8 flex md:flex-row flex-col justify-start items-center mb-24 rounded-md">
            <img className="w-28 h-28 md:w-24 md:h-24 rounded-full cover ml-2 mr-5 " src={Logo}/>
            <div className="ml-4 p-1.5 mt-6 md:mt-0 ">
                <h2 className="text-lg md:text-lg font-bold text-white">{Title}</h2>
                <p className="text-base mb-1.5 text-gray-400">{Date}</p>
            </div>
        </div>
    )
}

export default EducationCard