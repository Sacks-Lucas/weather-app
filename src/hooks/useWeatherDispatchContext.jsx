import {useContext} from 'react'
import {WeatherDispatchContext} from '../utils/utils'

const useWeatherDispatchContext = () =>{
    const dispatch= useContext(WeatherDispatchContext)
    if(!dispatch){
        throw Error("Must set dispatch provider")
    }
    return dispatch
}

export default useWeatherDispatchContext