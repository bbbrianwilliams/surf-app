import React from 'react'
import { SurfType, ForecastType } from '../types'
import { spotData } from '../SpotData/SpotData'
import { convertTime, getSunTime, getWeekDay } from '../helpers'
import SurfTile from './SurfTile'
import WindTile from './WindTile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

type Props = {
  surfData: SurfType
  windData: ForecastType
  spotName: string
}



const currentTime = new Date();
const currentHour = currentTime.getHours();

const Currentsurf = ({ surfData, spotName, windData }: Props): JSX.Element => {


  const {
    hourly:
    {
      wave_height: waveHeight,
      swell_wave_period: swellPeriod,
      swell_wave_height: swellHeight,
      swell_wave_direction: swellDirection,
    },
  } = surfData



  return (
    <>
      <div className='w-full md:max-w-[500px] py-4
        md:px-10 lg:px-24 h-full lg:h-auto bg-white
        bg-opacity-20 backdrop-blur-lg rounded drop-shadow-1g'>
        <h2 className='text-2xl font-black text-center mb-5'>
          {spotName}
        </h2>
        <h2 className='font-black mb-5'>Current Surf Conditions for {getWeekDay()}</h2>
        <SurfTile
          title='Surf Height'
          info={`${(waveHeight[currentHour]).toFixed(1)} ft`}
        />
        <SurfTile
          title='Swell'
          info={`
        ${(swellHeight[currentHour]).toFixed(1)} ft
        @ ${Math.round(swellPeriod[currentHour])} sec
        from ${swellDirection[currentHour]}°
        `}
        />
        <WindTile
          icon="wind"
          info={Math.round(windData.list[0].wind.speed)}
          direction={windData.list[0].wind.deg}
          arrow={
            <FontAwesomeIcon
              icon={faArrowDown}
              size='2x'
              style={{
                transform: `rotateZ(${windData.list[0].wind.deg}deg)`
              }}
            />}
        />
      </div>
    </>

  )
}

export default Currentsurf