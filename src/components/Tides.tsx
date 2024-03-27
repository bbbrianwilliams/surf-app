import React, { useState } from 'react'
import TideTile from './TideTile'
import { TideHiLoType, TideType } from '../types'
import { convertTime } from '../helpers'


type Props = {
    tideData: TideType
    tideHiLo: TideHiLoType
}

const currentTime = new Date();
const currentHour = currentTime.getHours();


const Tides = ({tideData, tideHiLo}: Props): JSX.Element => {
    
    function getLowTide(i: number) {

        let lowTideData = {
            t: '',
            v: '',  
         };

         //Get the value and time of tides

        let lowTide = tideHiLo.predictions[i].type === 'L';
        
            if (lowTide) {
                lowTideData.v = Number(tideHiLo.predictions[i].v).toFixed(1);
                lowTideData.t = (tideHiLo.predictions[i].t).substring(10);
            }

            else {
                i++;
                lowTideData.v = Number(tideHiLo.predictions[i].v).toFixed(1);
                lowTideData.t = (tideHiLo.predictions[i].t).substring(10);
            }

            //console.log(lowTideData);

           return lowTideData;  
        }

    function getHighTide(i: number) {

        let highTideData = {
            t: '',
            v: '',  
         };

        let highTide = tideHiLo.predictions[i].type === 'H';
        
            if (highTide) {
                highTideData.v = Number(tideHiLo.predictions[i].v).toFixed(1);
                highTideData.t = (tideHiLo.predictions[i].t).substring(10);
            }

            else {
                i++;
                highTideData.v = Number(tideHiLo.predictions[i].v).toFixed(1);
                highTideData.t = (tideHiLo.predictions[i].t).substring(10);
            }

            //console.log(lowTideData);

           return highTideData;  
        }
        
  return (
    <div className='w-full md:max-w-[500px] py-4
    md:px-10 lg:px-24 h-full lg:h-auto bg-white
    bg-opacity-20 backdrop-blur-lg rounded drop-shadow-1g'>
        <h2 className='font-black mb-5'>Tides</h2>
    {/* Current Tide Data */}
    <TideTile
     title='Current'
     v={`${Number(tideData.predictions[currentHour].v).toFixed(1)} ft`}
     t={`as of ${convertTime((tideData.predictions[currentHour].t.substring(10)))}`}
     />

    {/* High Tide Data */}
    <TideTile
     title='High'
     v={`${getHighTide(0).v} ft` }
     t={`${convertTime(getHighTide(0).t)}`}
     v2={`${getHighTide(2).v} ft`}
     t2={`${convertTime(getHighTide(2).t)}`}
     />

    {/* Low Tide Data */}
    <TideTile 
    title='Low'
    v={`${getLowTide(0).v} ft`}
    t={`${convertTime(getLowTide(0).t)}`}
    v2={`${getLowTide(2).v} ft`}
    t2={`${convertTime(getLowTide(2).t)}`}
    />
    </div>
  )
}

export default Tides