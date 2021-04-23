import React from 'react'
import Forecast from './Forecast'
import {render} from '@testing-library/react'
const forecastItemList=[
    {hour:18 ,state:"clear",temprerature:17,weekDay:"Jueves"},
    {hour:6 ,state:"clouds",temprerature:18,weekDay:"Viernes"},
    {hour:17 ,state:"drizzle" ,temprerature:18 ,weekDay:"Viernes"},
    {hour:15 ,state:"clouds" ,temprerature:19 ,weekDay:"Viernes"},
    {hour:14 ,state:"rain" ,temprerature:17 ,weekDay:"Sabado"},]

test("Forecast render", async()=>{
    const {findAllByTestId} = render(
    <Forecast forecastItemList={forecastItemList}/>)
    const forecastItems= await findAllByTestId("forecast-item-container")
    expect(forecastItems).toHaveLength(5)
})