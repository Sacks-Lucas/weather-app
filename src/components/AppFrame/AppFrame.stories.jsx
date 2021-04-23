import React from 'react'
import AppFrame from './AppFrame'
import { BrowserRouter as Router } from 'react-router-dom'


export default {
    title: "AppFrame",
    Component: AppFrame
}

export const AppFrameExample = () => {
    <Router>
        <AppFrame>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus dolorum quibusdam expedita, accusamus consectetur sequi ad minima, quae corrupti amet, nam distinctio totam sapiente unde rem suscipit. Ut, aspernatur?
        </AppFrame>
    </Router>
}