import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Comp1 from './components/Comp1.jsx'
import Comp3 from './components/Comp3.jsx'
import Comp5 from './components/Comp5.jsx'
import Conditional from './components/Conditional.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Conditional />
  </React.StrictMode>,
)
