import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Root from './router/index'
import { store } from './store/index.js'

const App = () => (
    <Provider store={store}>
        <BrowserRouter basename="/nodejs/music-cqupt/build">
            <Root />
        </BrowserRouter>
    </Provider>
)

export default App