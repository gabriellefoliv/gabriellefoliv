import * as Tabs from '@radix-ui/react-tabs'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card } from './templates/ProjectCard'


function Projects() {

    return (
        <div className='w-full justify-center items-center'>
            <h1 className='text-center font-bold text-xl text-white'>💻 Projetos pessoais</h1>
            <Tabs.Root defaultValue='backend' activationMode='manual' autoFocus>
                <Tabs.List className='flex h-12 mt-8 text-white w-full justify-between px-20'>
                    <Tabs.Trigger value="backend" className='p-2 px-4 font-bold hover:bg-zinc-800 hover:rounded-md hover:border-b-2 hover:border-sky-800 hover:duration-200 hover:transition hover:ease-in-out'>Backend</Tabs.Trigger>
                    <Tabs.Trigger value="frontend" className='p-2 px-4 font-bold hover:bg-zinc-800 hover:rounded-md hover:border-b-2 hover:border-sky-800 hover:duration-200 hover:transition hover:ease-in-out'>Frontend</Tabs.Trigger>
                    <Tabs.Trigger value="mobile" className='p-2 px-4 font-bold hover:bg-zinc-800 hover:rounded-md hover:border-b-2 hover:border-sky-800 hover:duration-200 hover:transition hover:ease-in-out'>Mobile</Tabs.Trigger>
                </Tabs.List>

                <div>
                    <Tabs.Content value="backend">
                        <Card.Root>
                            <Card.Title title="Code Snippets" linkTo='' />
                            <Card.Description description='Aplicativo para salvar e compartilhar code snippets. Async Storage e Image Picker - bibliotecas.' />
                        </Card.Root>
                        <Card.Root>
                            <Card.Title title="Code Snippets" linkTo='' />
                            <Card.Description description='Aplicativo para salvar e compartilhar code snippets. Async Storage e Image Picker - bibliotecas.' />
                        </Card.Root>
                    </Tabs.Content>
                    <Tabs.Content value="frontend">
                        <Card.Root>
                            <Card.Title title="Code Snippets" linkTo='' />
                            <Card.Description description='Aplicativo para salvar e compartilhar code snippets. Async Storage e Image Picker - bibliotecas.' />
                        </Card.Root>
                        <Card.Root>
                            <Card.Title title="Code Snippets" linkTo='' />
                            <Card.Description description='Aplicativo para salvar e compartilhar code snippets. Async Storage e Image Picker - bibliotecas.' />
                        </Card.Root>

                    </Tabs.Content>
                    <Tabs.Content value="mobile">
                        <Card.Root>
                            <Card.Title title="Code Snippets" linkTo='' />
                            <Card.Description description='Aplicativo para salvar e compartilhar code snippets. Async Storage e Image Picker - bibliotecas.' />
                        </Card.Root>
                        <Card.Root>
                            <Card.Title title="Code Snippets" linkTo='' />
                            <Card.Description description='Aplicativo para salvar e compartilhar code snippets. Async Storage e Image Picker - bibliotecas.' />
                        </Card.Root>

                    </Tabs.Content>
                </div>
            </Tabs.Root>
        </div>
    )
}

export default Projects