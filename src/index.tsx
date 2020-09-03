import { render } from 'react-dom'
import * as React from 'react'

import App from './App'

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
)
