import React from 'react'
import convertUnits from 'convert-units'
export const getCityCode= (city,countryCode) => `${city}-${countryCode}`
export const toCelsius= (temp) =>Number(convertUnits(temp).from('K').to('C').toFixed(0))
export const WeatherStateContext= React.createContext()
export const WeatherDispatchContext= React.createContext()