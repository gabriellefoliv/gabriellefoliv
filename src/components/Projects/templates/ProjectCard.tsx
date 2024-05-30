import { ReactNode } from "react";
import Externo from "../../../assets/externo.png";
interface RootProps {
  children: ReactNode;
}

export function CardRoot({ children }: RootProps) {
  return (
    <div className=" mt-6 p-4 rounded-md hover:bg-zinc-800 duration-200 transition ease-in-out">
      {children}
    </div>
  );
}

interface TitleProps {
  title: string;
  linkTo: string;
  previewApp?: string;
}

export function CardTitle({ title, linkTo }: TitleProps) {
  return (
        <div className="flex flex-row items-center">
          <h1 className="font-bold text-white">{title}</h1>

          <a href={linkTo} target="_blank" className="ml-2 w-8">
            <img src={Externo} className="w-3 h-3" />
          </a>
        </div>  );
}

interface DescriptionProps {
  description: string;
}

export function CardDescription({ description }: DescriptionProps) {
  return <p className="text-gray-400 mt-1">{description}</p>;
}

export const Card = {
  Root: CardRoot,
  Title: CardTitle,
  Description: CardDescription,
};

// import * as Dialog from '@radix-ui/react-dialog'

// import { ProjectButton } from './projectButton'

// import {X} from 'lucide-react'

// interface ProjectCardProps {
//     screenshot: any
//     title: string
//     technologies: Array<string>
//     site?: any
//     code: any
//     description: string
//     challenges: string
//     learnings: string
// }

// function ProjectCard({screenshot, title, technologies, site, code, description, challenges, learnings}:ProjectCardProps) {
//     return(
//         <>
//         <Dialog.Root>
//             <Dialog.Trigger className='-mb-16 md:mb-0 flex flex-col md:p-4 text-left scale-75 md:scale-100 hover:scale-105 hover:duration-300 transition '>
//                 <div className="md:w-96 md:h-full p-4  bg-white rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition">
//                     <img className="w-full h-48 rounded-md cover " src={screenshot}/>
//                     <h3 className="px-3 pt-4 pb-1 font-bold text-xl">{title}</h3>
//                     <div className='px-3 pb-2'>
//                         <p>{technologies}</p>
//                     </div>
//                     <div className='px-3 flex'>
//                         <a href={site} className='mr-2' target='_blank'>
//                             <ProjectButton>
//                                 <ProjectButton.Icon>
//                                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738" fill="#fff"></path></svg>
//                                 </ProjectButton.Icon>
//                                 <ProjectButton.Text>Live</ProjectButton.Text>
//                             </ProjectButton>
//                         </a>
//                         <a href={code} target='_blank'>
//                             <ProjectButton>
//                                 <ProjectButton.Icon>
//                                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="#fff" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
//                                 </ProjectButton.Icon>
//                                 <ProjectButton.Text>Código</ProjectButton.Text>
//                             </ProjectButton>
//                         </a>
//                     </div>
//                 </div>
//             </Dialog.Trigger>
//             <Dialog.Portal>
//                 <Dialog.Overlay className='inset-0 fixed bg-black/50 z-50' />
//                 <Dialog.Content className='fixed z-50 overflow-hidden md:left-1/2 inset-0 md:inset-auto md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[950px] md:h-[70vh] w-full bg-gray-200 md:rounded-md flex flex-col outline-none'>
//                     <Dialog.Close className='md:hidden absolute right-0 top-0 p-1.5 text-sky-700 hover:text-slate-100'>
//                         <X className='size-5'/>
//                     </Dialog.Close>
//                     <div className='w-full h-full flex flex-col md:flex-row justify-center items-center p-4 overflow-scroll md:overflow-hidden'>
//                         <div className='mt-32 md:mt-0 flex flex-col items-start p-4 h-full'>
//                             <img className='w-96 h-48' src={screenshot}/>

//                         </div>
//                         <div className='p-4 flex-1 flex flex-col items-start justify-start h-full md:overflow-y-scroll text-justify px-8 leading-6'>
//                             <h1 className='font-bold md:text-2xl mb-1'>Descrição do projeto:</h1>
//                             <p className='mb-4'>{description}</p>
//                             <h1 className='font-bold md:text-2xl mb-1'>Desafios do projeto:</h1>
//                             <p className='mb-4'>{challenges}</p>
//                             <h1 className='font-bold md:text-2xl mb-1'>Aprendizados do projeto:</h1>
//                             <p className='mb-12'>{learnings}</p>
//                         </div>
//                     </div>
//                 </Dialog.Content>
//             </Dialog.Portal>
//         </Dialog.Root>

//         </>

//     )
// }

// export default ProjectCard

// yarn add @radix-ui/react-dialog
// yarn add @radix-ui/react-scroll-area
