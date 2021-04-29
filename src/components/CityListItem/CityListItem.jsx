import React from 'react'
import CityInfo from './../CityInfo'
import Weather from './../Weather'
import Grid from '@material-ui/core/Grid'
import ListItem from '@material-ui/core/ListItem'
import PropTypes from 'prop-types'

const CityListItem = ({city,countryCode,country, eventOnClickCity,weather}) => {
    return (
        <ListItem 
            button 
            onClick={() => eventOnClickCity(city,countryCode)}>
            <Grid container
                justify="center"
                alignItems="center">
                    <Grid item
                        md={9}
                        xs={12}>
                        <CityInfo city={city} country={country}/>
                    </Grid>
                    <Grid item
                        md={3}
                        xs={12}> 
                            <Weather temperature ={weather && weather.temperature} 
                                     state={weather && weather.state}/>
                    </Grid>
            </Grid>
        </ListItem>
    )
}

CityListItem.propTypes = {
    city:PropTypes.string.isRequired,
    country:PropTypes.string.isRequired,
    countryCode:PropTypes.string.isRequired,
}

export default React.memo(CityListItem)
