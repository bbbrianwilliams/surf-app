import React from 'react'
import { SurfType } from '../types'

type Props = {
    t: string
    t2?: string
    v: string
    v2?: string
    title: string
    type?: string
}

const TideTile = ({ t, t2, v, v2, type, title }: Props) => {



    return (
        <article className='w-[300px] h-[75px] text-zinc-700 bg-white/20 backdrop-blur-1g
    rounded-md drop-shadow-1g p-2 mb-5 flex justify-between items-center'>
            <div className='flex text-sm font-bold'>
                <h4 className='ml-1'>{title}</h4>
            </div>
            <p className='ml-5'>{type ? <h3>{type}</h3> : null}</p>
            <div>
                <h3 className='text-md'>{v}</h3>
                <h3 className='text-md'>{t}</h3>
            </div>
            <div>
                <h3 className='text-md'>{v2}</h3>
                <h3 className='text-md'>{t2}</h3>
            </div>


        </article>
    )
}

export default TideTile