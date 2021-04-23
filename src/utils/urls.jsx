const appid="b0c10ed933d0d953089705f15162f7a7"


export const getWeatherUrl = ({ city , countryCode }) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
)

export const getForecastUrl = ({city , countryCode}) =>(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
)