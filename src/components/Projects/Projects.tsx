import * as Tabs from '@radix-ui/react-tabs'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card } from './templates/ProjectCard'

interface ProjectsProps {
    isEnglish: boolean
}

function Projects({ isEnglish }: ProjectsProps) {

    return (
        <div className='w-full justify-center items-center'>
            {isEnglish ? (<>
                <h1 className='text-center font-bold text-xl text-white'>💻 Personal Projects</h1>
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
                                <Card.Description description='Notification management system made in Nest JS and Prisma with SQLite.' />
                            </Card.Root>

                            <Card.Root>
                                <Card.Title title="Meeting Room Reservation Service" linkTo='https://github.com/gabriellefoliv/meeting-room-reservation-backend' />
                                <Card.Description description='Meeting room reservation system developed with NodeJS and Fastify, with MySQL database operated with Prisma ORM.' />
                            </Card.Root>

                            <Card.Root>
                                <Card.Title title="Plann.er API" linkTo='https://github.com/gabriellefoliv/planner-backend' />
                                <Card.Description description="A trip planner where you can create new trips, invite friends and send confirmation emails. Developed during Rocketseat's NLW Journey." />
                            </Card.Root>

                        </Tabs.Content>

                        <Tabs.Content value="frontend">

                            <Card.Root>
                                <Card.Title title="Notes App" linkTo='https://github.com/gabriellefoliv/nlw-notes' />
                                <Card.Description description='Notes with Speech Recognition API. You can record your voice and save it as a note. You can also write it down. Typescript and TailwindCSS.' />
                            </Card.Root>

                            <Card.Root>
                                <Card.Title title="Plann.er" linkTo='https://github.com/gabriellefoliv/planner-frontend' />
                                <Card.Description description='Frontend that uses the Travel Planning API.' />
                            </Card.Root>

                            {/* <Card.Root>
                            <Card.Title title="Advocacia Especializada" linkTo='https://github.com/gabriellefoliv/advocacia-especializada' />
                            <Card.Description description='Site feito para um escritório de advocacia.' />
                        </Card.Root> */}

                            {/* <Card.Root>
                            <Card.Title title="WizForm" linkTo='https://github.com/gabriellefoliv/wizform' />
                            <Card.Description description='Biblioteca de componente React em desenvolvimento. (Repositório privado)' />
                        </Card.Root> */}

                        </Tabs.Content>

                        <Tabs.Content value="mobile">

                            <Card.Root>
                                <Card.Title title="Code Snippets" linkTo='https://github.com/gabriellefoliv/csnippets-native' />
                                <Card.Description description='Application for saving and sharing code snippets. Async Storage, Image Picker, View Shot and Sharing, all Expo libraries.' />
                            </Card.Root>

                            <Card.Root>
                                <Card.Title title="Pokedéx App" linkTo='https://github.com/gabriellefoliv/pokedex-native/blob/main/Readme.md' />
                                <Card.Description description='First mobile application. Made with React Native, Typescript and styled-components + PokéAPI for data analysis.' />
                            </Card.Root>

                        </Tabs.Content>

                    </div>
                </Tabs.Root></>
            ) : (
                <>
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
                                    <Card.Title title="Serviço de notificações" linkTo='https://github.com/gabriellefoliv/notifications-service' />
                                    <Card.Description description='Sistema de gerenciamento de notificações feito em Nest JS e Prisma com o SQLite.' />
                                </Card.Root>

                                <Card.Root>
                                    <Card.Title title="Reserva de Salas de Reunião" linkTo='https://github.com/gabriellefoliv/meeting-room-reservation-backend' />
                                    <Card.Description description='Sistema de reserva de salas de reunião desenvolvida com NodeJS e Fastify, com banco de dados MySQL operado com Prisma ORM.' />
                                </Card.Root>

                                <Card.Root>
                                    <Card.Title title="Plann.er API" linkTo='https://github.com/gabriellefoliv/planner-backend' />
                                    <Card.Description description='Um planejador de viagens onde você pode criar novas viagens, convidar amigos e enviar e-mails de confirmação. Desenvolvido durante NLW Journey de Rocketseat.' />
                                </Card.Root>

                            </Tabs.Content>

                            <Tabs.Content value="frontend">

                                <Card.Root>
                                    <Card.Title title="Notas App" linkTo='https://github.com/gabriellefoliv/nlw-notes' />
                                    <Card.Description description='Notas com Speech Recognition API. Você consegue gravar a voz e salvar como nota. Também é possível anotar. Typescript e TailwindCSS.' />
                                </Card.Root>

                                <Card.Root>
                                    <Card.Title title="Plann.er" linkTo='https://github.com/gabriellefoliv/planner-frontend' />
                                    <Card.Description description='Frontend que usa a API de planejamento de viagens.' />
                                </Card.Root>

                                {/* <Card.Root>
                            <Card.Title title="Advocacia Especializada" linkTo='https://github.com/gabriellefoliv/advocacia-especializada' />
                            <Card.Description description='Site feito para um escritório de advocacia.' />
                        </Card.Root> */}

                                {/* <Card.Root>
                            <Card.Title title="WizForm" linkTo='https://github.com/gabriellefoliv/wizform' />
                            <Card.Description description='Biblioteca de componente React em desenvolvimento. (Repositório privado)' />
                        </Card.Root> */}

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
                </>
            )}
        </div>
    )
}

export default Projects