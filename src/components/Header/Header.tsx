import ImgPerfil from '../../assets/imgperfil.png'

function Header() {
    return(
        <div className="w-full md:h-[500px] flex flex-col items-center">
        
        <div className="w-full h-52 mt-8 bg-gradient-to-r from-blue-800 to-indigo-900">
            <video>
                
            </video>
        </div>

        <div className="w-40 h-40 rounded-full bg-white absolute mt-40 mr-96">
            <img className='w-full p-1.5 rounded-full' src={ImgPerfil} />
        </div>
        
        <div className='mt-20 -ml-24'>
            <h1 className='text-white font-bold text-3xl mt-4'>
                Gabrielle Oliveira
            </h1>
            <p className='text-gray-400'>
            UERJ - Engenharia da Computação || Software Developer
            </p>
        </div>
        
        </div>
    )
}

export default Header