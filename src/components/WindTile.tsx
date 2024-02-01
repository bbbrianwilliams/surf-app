import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core'
import Wind from './Icons/Wind'
import { getWindDirection } from '../helpers'

type Props = {
    icon: 'wind'
    info: number | JSX.Element
    direction: number
    arrow?: string | JSX.Element
}

const icons = {
    wind: Wind,
}


const WindTile = ({icon, info, arrow, direction}: Props): JSX.Element => {

    const Icon = icons[icon]

  return (
    <article className='w-[300px] h-[75px] text-zinc-700 bg-white/20 backdrop-blur-1g
    rounded-md drop-shadow-1g p-2 mb-5 flex justify-between items-center'>
        <div className='flex text-sm font-bold'>
          <Icon /> <h4 className='ml-1'>Wind</h4>
        </div>
        <div>
          <h3 className='text-lg text-center'>{info}</h3>
          <h3>mph</h3>
        </div>
        <div className='flex items-center'>
          <h3 className='align-center mr-12'>from</h3>
            <div>
              <h3 className='text-lg'>{arrow}</h3>
              <h3>{getWindDirection(direction)}</h3>
            </div> 
          {/* <h3 className='text-lg'>{direction}°</h3> */}
        </div>  
    </article>
  )
}

export default WindTile