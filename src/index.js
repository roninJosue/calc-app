import React from 'react'
import ReactDom from 'react-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import App from './App'
import './App.css'

ReactDom.render(
    <App />,
    document.getElementById('root')
)

serviceWorkerRegistration.register();

reportWebVitals();