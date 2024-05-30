import * as Tabs from '@radix-ui/react-tabs'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card } from './templates/ProjectCard'


function Projects() {

    return (
        <div className='w-full justify-center items-center'>
            <h1 className='text-center font-bold text-xl text-white'>💻 Projetos pessoais</h1>
            <Tabs.Root defaultValue='backend' activationMode='manual' autoFocus>
                <Tabs.List className='flex h-12 mt-8 text-white w-full justify-between md:px-20'>
                    <Tabs.Trigger value="backend" className='p-2 px-4 font-bold hover:bg-zinc-800 hover:rounded-md hover:border-b-2 hover:border-sky-800 hover:duration-200 hover:transition hover:ease-in-out'>Backend</Tabs.Trigger>
                    <Tabs.Trigger value="frontend" className='p-2 px-4 font-bold hover:bg-zinc-800 hover:rounded-md hover:border-b-2 hover:border-sky-800 hover:duration-200 hover:transition hover:ease-in-out'>Frontend</Tabs.Trigger>
                    <Tabs.Trigger value="mobile" className='p-2 px-4 font-bold hover:bg-zinc-800 hover:rounded-md hover:border-b-2 hover:border-sky-800 hover:duration-200 hover:transition hover:ease-in-out'>Mobile</Tabs.Trigger>
                </Tabs.List>

                <div>

                    <Tabs.Content value="backend">

                        <Card.Root>
                            <Card.Title title="Notifications Service" linkTo='https://github.com/gabriellefoliv/notifications-service' />
                            <Card.Description description='Aplicativo para salvar e compartilhar code snippets. Async Storage e Image Picker - bibliotecas.' />
                        </Card.Root>

                        <Card.Root>
                            <Card.Title title="Order Management System" linkTo='' />
                            <Card.Description description='Microserviços com Nest JS, Prisma, GraphQL e Docker. Sistema de gerenciamento de pedidos.' />
                        </Card.Root>

                        <Card.Root>
                            <Card.Title title="Auth em Nest JS" linkTo='https://github.com/gabriellefoliv/nest-auth' />
                            <Card.Description description='Autenticação em Nest JS, Prisma e conexão com banco de dados MySQL, autenticação usando Guards.' />
                        </Card.Root>

                    </Tabs.Content>

                    <Tabs.Content value="frontend">

                        <Card.Root>
                            <Card.Title title="Notas App" linkTo='https://github.com/gabriellefoliv/nlw-notes' />
                            <Card.Description description='Notas com Speech Recognition API. Você consegue gravar a voz e salvar como nota. Também é possível anotar. Typescript e TailwindCSS.' />
                        </Card.Root>

                        <Card.Root>
                            <Card.Title title="WizForm" linkTo='' />
                            <Card.Description description='Aplicativo para salvar e compartilhar code snippets. Async Storage e Image Picker - bibliotecas.' />
                        </Card.Root>

                    </Tabs.Content>

                    <Tabs.Content value="mobile">

                        <Card.Root>
                            <Card.Title title="Code Snippets" linkTo='https://github.com/gabriellefoliv/csnippets-native' />
                            <Card.Description description='Aplicativo para salvar e compartilhar code snippets. Async Storage, Image Picker, View Shot e Sharing, todas bibliotecas da Expo.' />
                        </Card.Root>

                        <Card.Root>
                            <Card.Title title="Pokedéx App" linkTo='https://github.com/gabriellefoliv/pokedex-native/blob/main/Readme.md' />
                            <Card.Description description='Primeira aplicação mobile. Feita com React Native, Typescript e styled-components + PokéAPI para a apuração dos dados.' />
                        </Card.Root>

                    </Tabs.Content>
                    
                </div>
            </Tabs.Root>
        </div>
    )
}

export default Projects