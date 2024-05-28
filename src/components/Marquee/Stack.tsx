import Marquee from 'react-fast-marquee'
import TS from '../../assets/stack/typescript.png'
import TW from '../../assets/stack/tailwindcss.png'
import React from '../../assets/stack/reactjs.png'
import Docker from '../../assets/stack/icons8-docker.svg'
import Graph from '../../assets/stack/icons8-graphql.svg'
import SQL from '../../assets/stack/icons8-mysql.svg'
import Nest from '../../assets/stack/icons8-nestjs-logo.svg'
import Node from '../../assets/stack/icons8-nodejs.svg'
import Prisma from '../../assets/stack/icons8-prisma-orm.svg'

export function Stack() {
    return (
        <div className='-mt-16 mb-12'>
            <Marquee className='w-full h-full' speed={100} pauseOnHover>
                <div className='px-8'>
                    <img src={TS} className='w-8'/>
                </div>
                <div className='px-8'>
                    <img src={TW} className='w-8'/>
                </div>
                <div className='px-8'>
                    <img src={React} className='w-8'/>
                </div>
                <div className='px-8'>
                    <img src={Docker} className='w-8'/>
                </div>
                <div className='px-8'>
                    <img src={SQL} className='w-8' />
                </div>
                <div className='px-8'>
                    <img src={Graph} className='w-8'/>
                </div>
                <div className='px-8'>
                    <img src={Nest} className='w-8'/>
                </div>
                <div className='px-8'>
                    <img src={Node} className='w-8'/>
                </div>
                <div className='px-8'>
                    <img src={Prisma} className='w-8' />
                </div>
            </Marquee>
        </div>
    )
}