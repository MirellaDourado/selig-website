import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
)
