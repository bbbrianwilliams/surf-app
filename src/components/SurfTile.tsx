import React from 'react'
import { SurfType } from '../types'

type Props = {
    title: string
    info: string | JSX.Element
}

const SurfTile = ({title, info}: Props) => {
  return (
    <article className='w-[300px] h-[75px] text-zinc-700 bg-white/20 backdrop-blur-1g
    rounded-md drop-shadow-1g p-2 mb-5 flex justify-between items-center'>
        <div className='flex text-sm font-bold'>
            <h4 className='ml-1'>{title}</h4>
        </div>
        <h3 className='text-lg'>{info}</h3>
        
    </article>
  )
}

export default SurfTile