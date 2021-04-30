import {useContext} from 'react'
import {WeatherStateContext} from '../utils/utils'

const useWeatherStateContext = () =>{
    const state= useContext(WeatherStateContext)
    if(!state){
        throw Error("Must set state provider")
    }
    return state
}

export default useWeatherStateContext