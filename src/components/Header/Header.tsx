import ImgPerfil from '../../assets/img-portfolio.jpeg'
import { Button } from '../Button/button'

import GithubIcon from '../../assets/github.svg'
import TwitterIcon from '../../assets/twitter.svg'

function Header() {
    return (
        <div className="w-full md:h-[500px] flex flex-col items-center">

            <div className="w-full h-52 md:mt-8 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-cyan-900 via-cyan-100 to-cyan-900">

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

                <a href="https://x.com/gabsnz12" target='_blank'>
                    <Button>
                        <Button.Icon>
                            <img src={TwitterIcon} className='w-8' />
                        </Button.Icon>
                        <Button.Text>Twitter</Button.Text>
                    </Button>
                </a>
            </div>

            <div className='mt-2 md:-ml-24 p-4'>
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