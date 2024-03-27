import React, { useEffect, useState } from 'react'
import { ForecastType, SpotType } from '../types'
import Sunrise from './Icons/Sunrise'
import { getHumidityValue, getPop, getSunTime, convertHours, getVisibilityValue, getWindDirection } from '../helpers'
import Sunset from './Icons/Sunset'
import Tile from './Tile'
import WindTile from './WindTile'
import { spotData } from '../SpotData/SpotData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from './ProgressBar'

type Props = {
    data: ForecastType
}

const Degree = ({ temp }: { temp: number }): JSX.Element => (
    <span>
        {temp}<sup>o</sup>
    </span>
)

const Forecast = ({ data }: Props): JSX.Element => {


    const today = data.list[0];

    //console.log(data.list[0].dt);



    return (

        /* Current Weather conditions overview */

        <div className='w-full md:max-w-[500px] py-4
    md:px-10 lg:px-24 h-full lg:h-auto bg-white
    bg-opacity-20 backdrop-blur-lg rounded drop-shadow-1g'>
            <div className='mx-auto w-[300px]'>
                <section className='text-center'>
                    {/* <h1 className='font-black mb-5'>{weekdayToday}</h1> */}
                    <h1 className='text-2xl font-black'>
                        <Degree temp={Math.round(today.main.temp)} />
                    </h1>
                    <p className='text-sm'>
                        {today.weather[0].description}
                    </p>
                    <p>
                        H: <Degree temp={Math.ceil(today.main.temp_max)} />  L: <Degree temp={Math.floor(today.main.temp_min)} />
                    </p>
                </section>


                {/*Forecast scroll bar - conditions and temp by hour with weather icons */}

                <section className='flex overflow-x-scroll no-scrollbar mt-4 pb-2 mb-5'>

                    {data.list.map((item, idx) => (
                        <div
                            className='inline-block text-center w-[50px] flex-shrink-0'
                            key={idx}
                        >
                            <p className='text-sm'>{idx === 0 ? 'Now' : convertHours(item.dt)}</p>
                            <img
                                alt={`weather-icon-${item.weather[0].description}`}
                                src={`./icons/${item.weather[0].icon}.png`}
                            />

                            <p className='text-sm font-bold'>
                                <Degree temp={Math.round(item.main.temp)} />
                            </p>

                        </div>
                    ))}

                </section>


                {/* Sunrise and sunset panel */}
                <section className='flex flex-wrap justify-between text-zinc-700'>
                    <div className='w-[300px] text-xs font-bold flex
                justify-center bg-white/20 backdrop-blur-lg rounded
                drop-shadow-lg py-4 mb-5'>
                        <Sunrise /> <span className='mr-5 ml-5 block'>{getSunTime(data.city.sunrise)}</span>
                        <Sunset /> <span className='mr-5 ml-5 block'>{getSunTime(data.city.sunset)}</span>
                    </div>


                    {/* Current Weather tiles */}


                    {/* Feels like temp */}
                    <Tile
                        icon='feels'
                        title='Feels like'
                        info={<Degree temp={Math.round(today.main.feels_like)} />}
                    />

                    {/* Humidity */}
                    <Tile
                        icon='humidity'
                        title='Humidity'
                        info={`${today.main.humidity} %`}
                    />

                    {/* Precip */}
                    <Tile
                        icon='pop'
                        title='Precip'
                        info={`${Math.round(today.pop * 1000)}%`}
                    />

                    {/* Pressure */}
                    <Tile
                        icon="pressure"
                        title="Pressure"
                        info={`${today.main.pressure} mb`}
                    />

                    {/* Visibility */}
                    <Tile
                        icon='visibility'
                        title='Visibility'
                        info={`${(today.visibility / 1000).toFixed()} miles`}
                    />
                </section>
            </div>
        </div>
    )
}

export default Forecast