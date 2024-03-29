export type SpotType = {
    name: string
    id: string
    lat: string
    lon: string
    stationId: string
}

export type ForecastType = {
    city: {
        name: string
        country: string
        sunrise: number
        sunset: number
    }
    
    list: [
    {
        dt: number
        main: {
            feels_like: number
            humidity: number
            pressure: number
            temp: number
            temp_max: number
            temp_min: number
        }
        weather: [
            {
                main: string
                icon: string
                description: string
            }
        ]
        wind: {
            speed: number
            gust: number
            deg: number
        }
        clouds: {
            all: number
        }
        pop: number
        visibility: number


    }
    ]
}

export type SurfType = {
    hourly:
    {
        wave_height: [number]
        swell_wave_period: [number]
        swell_wave_height: [number]
        swell_wave_direction: [number]
    }
}

export type TideType = {
    title: string
    predictions: [
        {
            t: string
            v: string
        }
    ]
}

export type TideHiLoType = {
    title: string
    predictions: [
        {
            t: string
            v: string
            type: string
        }
    ]
    
}

