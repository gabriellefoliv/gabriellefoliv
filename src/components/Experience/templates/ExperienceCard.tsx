
interface ExperienceCardProps {
    Logo: any,
    Title: string,
    Date: string,
    Description: string
}

function ExperienceCard({Logo, Title, Date, Description}:ExperienceCardProps) {

    return (
        <div className="w-[1000px] md:px-4 py-8 flex md:flex-row flex-col justify-start items-center mb-4 rounded-md">
            <img className="w-28 h-28 md:w-24 md:h-24 rounded-full cover mr-5" src={Logo}/>
            <div className="ml-4 p-1.5 mt-6 md:mt-0 ">
                <h2 className="mt-6 mb-2 md:mt-0 text-white font-bold">{Title}</h2>
                <h3 className="text-gray-400 mb-2">{Date}</h3>
                <p className="text-base mb-1.5 text-gray-400 text-justify">{Description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard