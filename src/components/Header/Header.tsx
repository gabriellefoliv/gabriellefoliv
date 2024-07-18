import ImgPerfil from '../../assets/img-portfolio.jpeg'
import { Button } from '../Button/button'

import GithubIcon from '../../assets/github.svg'
import LinkedinIcon from '../../assets/linkedin.svg'

interface HeaderProps {
    isEnglish: boolean
}

function Header({ isEnglish }: HeaderProps) {
    return (
        <div className="w-full md:h-[500px] flex flex-col items-center">

            <div className="w-full h-52 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-cyan-900 via-cyan-100 to-cyan-900">

            </div>

            <div className="w-40 h-40 rounded-full bg-white absolute mt-32 md:mt-40 md:mr-96">
                <img className='w-full p-1.5 rounded-full' src={ImgPerfil} />
            </div>

            <div className='flex mt-28 md:relative md:ml-96 md:mt-4'>
                <a href="https://github.com/gabriellefoliv" target='_blank'>
                    <Button>
                        <Button.Icon>
                            <img src={GithubIcon} className='w-8' />
                        </Button.Icon>
                        <Button.Text>Github</Button.Text>
                    </Button>
                </a>

                <a href="https://linkedin.com/in/gabriellefoliv" target='_blank'>
                    <Button>
                        <Button.Icon>
                            <img src={LinkedinIcon} className='w-3 ml-2' />
                        </Button.Icon>
                        <Button.Text>Linkedin</Button.Text>
                    </Button>
                </a>
            </div>

            <div className='mt-2 md:mt-8 md:-ml-24 p-4'>
                <h1 className='text-white font-bold text-3xl mt-4'>
                    Gabrielle Oliveira
                </h1>
                {isEnglish ? (<>
                <p className='text-gray-400'>
                    UERJ - Computer Engineer || Software Developer
                </p>
                <p className='text-gray-400'>
                    I develop mobile apps and websites! <a className='text-sky-400 hover:text-yellow-300' href="https://wa.me/5521981449194/?text=Quero+fazer+um+orçamento!">Let's talk!</a>
                </p></>
                ):(<>
                <p className='text-gray-400'>
                    UERJ - Engenharia da Computação || Software Developer
                </p>
                <p className='text-gray-400'>
                    Eu desenvolvo apps e sites! <a className='text-sky-400 hover:text-yellow-300' href="https://wa.me/5521981449194/?text=Quero+fazer+um+orçamento!">Faça o seu orçamento!</a>
                </p></>
                )}
            </div>


        </div>
    )
}

export default Header