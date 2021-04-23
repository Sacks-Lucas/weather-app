import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import CityList from './CityList'

const cities =[
    {city:"Buenos Aires",country:"Argentina"},
    {city:"Bogota",country:"Colombia"},
    {city:"Madrid",country:"España"},
    {city:"Cuidad de Mexico" ,country:"Mexico"},

]

test ("CityList renders", async () =>{
    //const { findAllByRole } = render (<CityList cities={cities}onclickCity={()=>{}}></CityList>)
    //const items = await findAllByRole("button")
    //expect(items).toHaveLength(4)
})

test ("CityList click on item", async () =>{
    //const fnClickOnItem = jest.fn()
    //const {findAllByRole} = render(<CityList cities={cities} onclickCity={fnClickOnItem}></CityList>)
    //const items = await findAllByRole("button")
    //fireEvent.click(items[0])
    //expect(fnClickOnItem).toHaveBeenCalledTimes(0)
})