import { log } from 'console';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const ProgressBar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(()=>{

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercent = (scrollY / (documentHeight - windowHeight));
            
            console.log(scrollPercent);
            setScrollPercent(scrollPercent);
        }

        window.addEventListener("scroll", handleScroll);

        return()=>{
            window.removeEventListener("scroll", handleScroll);
        }
    },[])
    return (
        <div
            id='progress-container'
            style={{
                height: "10px",
                width: "100%",
                backgroundColor: 'lightblue',
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
            }}
        >
            <div
                className='progress-fill'
                style={{
                    height: "100%",
                    width: `${(scrollPercent) * 100}%`,
                    backgroundColor: "blue",
                }}
            >

            </div>
        </div>
    )
}

export default ProgressBar