import React from 'react'
import  Wheather from './Weather'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Weather render sunny", async() =>{
    const {findByRole} =render(<Wheather temperature ={10} state="clear"/>)

    const temp= await findByRole("heading")

    expect(temp).toHaveTextContent("10")
})