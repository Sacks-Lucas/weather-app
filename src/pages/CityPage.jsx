import React, {useMemo} from 'react'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import CityInfo from './../components/CityInfo'
import Weather from '../components/Weather'
import Forecast from './../components/Forecast'
import ForecastChart from './../components/ForecastChart'
import WeatherDetails from './../components/WeatherDetails'
import AppFrame from './../components/AppFrame'
import useCityPage from '../hooks/useCityPage'
import useCityList from './../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import {getCountryNameByCountryCode} from './../utils/serviceCities'

const CityPage = ({onSetAllWeather,allWeather}) => {
    const { city, countryCode , chartData, forecastItemList}=useCityPage()
    const cities= useMemo(() => ([{ city , countryCode }]),[city,countryCode])
    useCityList(cities,allWeather,onSetAllWeather)
    const weather= allWeather[getCityCode(city,countryCode)]
    const state= weather && weather.state
    const temperature=weather && weather.temperature
    const country= countryCode && getCountryNameByCountryCode(countryCode)
    const humidity= weather && weather.humidity
    const wind= weather && weather.wind
    return (
        <AppFrame>
                <Grid container
            justify="space-around"
            direction="column"
            spacing={2}>
            <Grid item container 
                xs={12} 
                justify="center" 
                alignItems="flex-end">
                <CityInfo city={city} country={country}/>
            </Grid>
            <Grid container item xs={12} justify="center">
                <Weather state={state} temperature={temperature}/>
                {
                    humidity && wind && <WeatherDetails humidity={humidity} wind={wind}/>
                }
            </Grid>
            <Grid item>
                {
                    !chartData && !forecastItemList && <LinearProgress/>
                }
            </Grid>
            <Grid item>
                {
                    chartData && <ForecastChart data={chartData}/>
                }
            </Grid>
            <Grid item>
                {
                   forecastItemList&&<Forecast forecastItemList={forecastItemList}/>
                }
            </Grid>
        </Grid>
    </AppFrame>
    )
}

export default CityPage