import React, { useState } from 'react'
import { ForecastType, SurfType, SpotType, TideType, TideHiLoType } from '../types'
import { spotData } from '../SpotData/SpotData'
import Forecast from './Forecast'
import Currentsurf from './Currentsurf'
import { isAwaitExpression } from 'typescript'
import Tides from './Tides'
import ClipLoader from "react-spinners/ClipLoader";
import ProgressBar from './ProgressBar'




const Main = (): JSX.Element => {
  const [spot, setSpot] = useState<SpotType | null>(null)
  const [spotName, setSpotName] = useState<string>('')
  const [currentWeather, setCurrentWeather] = useState<ForecastType | null>(null)
  const [forecastWeather, setForecastWeather] = useState<ForecastType | null>(null)
  const [surfData, setSurfData] = useState<SurfType | null>(null)
  const [tideData, setTideData] = useState<TideType | null>(null)
  const [tideHiLo, setTideHiLo] = useState<TideHiLoType | null>(null)
  const [loading, setLoading] = useState<Boolean | null>(false)

  let currentTime = new Date();
  let currentDateString = currentTime.getFullYear() + ('0' + (currentTime.getMonth() + 1)).slice(-2) + ('0' + currentTime.getDate()).slice(-2);



  const handleClick = (spot: SpotType) => {

    setLoading(true);
    const currentSpot = spot;
    setSpot(currentSpot);
    setSpotName(spot.name);

    const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${spot.lat}&lon=${spot.lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    //const forecastWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${currentSpot.lat}&lon=${currentSpot.lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    const currentSurfFetch = fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${spot.lat}&longitude=${spot.lon}&hourly=wave_height,wave_period,swell_wave_height,swell_wave_direction,swell_wave_period&daily=wave_height_max&length_unit=imperial&timezone=America%2FNew_York`);
    const currentTideFetch = fetch(`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${currentDateString}&range=96&station=${currentSpot.stationId}&product=predictions&datum=MLLW&time_zone=lst_ldt&interval=60&units=english&application=DataAPI_Sample&format=json`);
    const tideHiLoFetch = fetch(`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${currentDateString}&range=120&station=${currentSpot.stationId}&product=predictions&datum=MLLW&time_zone=lst_ldt&interval=hilo&units=english&application=DataAPI_Sample&format=json`);




    Promise.all([currentWeatherFetch, currentSurfFetch, currentTideFetch, tideHiLoFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const surfResponse = await response[1].json();
        const tideResponse = await response[2].json();
        const tideHiLoResponse = await response[3].json();

        setCurrentWeather(weatherResponse);
        setSurfData(surfResponse);
        setTideData(tideResponse);
        setTideHiLo(tideHiLoResponse);

      })
      .catch((err) => console.log(err))

      .finally(() => setLoading(false))

  }


  return (
    
    <main
      className='min-h-full flex flex-col text-center items-center bg-gradient-to-t from-sky-900
    via-cyan-900 to-teal-900 w-full overflow-auto'>


    <ProgressBar />

      {loading ?
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '500px',
        }}>
          <ClipLoader
            size={'150px'}
            speedMultiplier={.2}
          />
        </div>

        : currentWeather ? (
          <>
            {surfData &&
              <Currentsurf
                surfData={surfData}
                spotName={spotName}
                windData={currentWeather}
              />}

            {tideHiLo && tideData &&
              <Tides
                tideData={tideData}
                tideHiLo={tideHiLo}
              />}

            {currentWeather &&
              <Forecast
                data={currentWeather}
              />}
          </>

        ) : (
          <div>
            <div className='m-24'>
              <p className='m-10 text-white'>
                Select one of the following spots
              </p>
              <nav>
                <ul>
                  {spotData.map((spot: SpotType, id: number): JSX.Element => {
                    return (
                      <li key={id}>
                        <button
                          className='mb-4 p-2 rounded w-[100px] bg-white/20
                    backdrop-blur-1g shadow-md hover:bg-sky-300 transition ease-in-out'
                          key={id}
                          onClick={() => handleClick(spot)}
                        >
                          {spot.name}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>

          </div>
        )}

    </main>
  )
}

export default Main