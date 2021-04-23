import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList=[
    {hour:18 ,state:"clear",temprerature:17,weekDay:"Jueves"},
    {hour:6 ,state:"clouds",temprerature:18,weekDay:"Viernes"},
    {hour:17 ,state:"drizzle" ,temprerature:18 ,weekDay:"Viernes"},
    {hour:15 ,state:"clouds" ,temprerature:19 ,weekDay:"Viernes"},
    {hour:14 ,state:"rain" ,temprerature:17 ,weekDay:"Sabado"},
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList}/>)