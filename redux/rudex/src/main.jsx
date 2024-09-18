import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './App/Store.js'
import Counter from './Components/Counter.jsx'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <App />
    <Counter/>  
    </Provider>,
)
