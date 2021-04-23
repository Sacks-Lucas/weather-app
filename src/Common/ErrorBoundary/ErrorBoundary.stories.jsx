import React from 'react'
import ErrorBoundary from './ErrorBoundary'

export default {
    title: "ErrorBoundary",
    component: ErrorBoundary
}

const ComponenntWithoutError= () => <h1>Sin error</h1>
const prop=undefined
const ComponenntWithError= () => <h1>{prop.hola}</h1>
export const ErrorBoundaryWithError = () => (
    <ErrorBoundary>
        <ComponenntWithError/>
    </ErrorBoundary>
)

export const ErrorBoundaryWithoutError = () => (
    <ErrorBoundary>
        <ComponenntWithoutError/>
    </ErrorBoundary>
)