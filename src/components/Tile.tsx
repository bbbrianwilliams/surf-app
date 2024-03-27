import React from 'react'
import Feels from './Icons/Feels'
import Wind from './Icons/Wind'
import Humidity from './Icons/Humidity'
import Visibility from './Icons/Visibility'
import Pressure from './Icons/Pressure'
import Pop from './Icons/Pop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core'

type Props = {
    icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
    title: string
    info: string | JSX.Element
    arrow?: string | JSX.Element

}

const icons = {
    wind: Wind,
    feels: Feels,
    humidity: Humidity,
    visibility: Visibility,
    pressure: Pressure,
    pop: Pop,
}

const Tile = ({ icon, title, info, arrow }: Props): JSX.Element => {

    const Icon = icons[icon]

    return (
        <article className='w-[140px] h-[75px] text-zinc-700 bg-white/20 backdrop-blur-1g
    rounded-md drop-shadow-1g p-2 mb-5 flex flex-col justify-between'>
            <div className='flex items-center text-sm font-bold'>
                <Icon /> <h4 className='ml-1'>{title}</h4>
            </div>
            <div className='flex'>
                <h3 className='text-lg'>{info}</h3>
                {/* <h3 className='ml-10'>{arrow}</h3> */}
            </div>
        </article>
    )
}

export default Tile