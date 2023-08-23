import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import BrandPage from './pages/BrandPage.jsx'
import Selig from './pages/Selig.jsx'
import { brandsArray, serviceArray } from './data.js';
import ServicePage from './pages/ServicePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={ <Home /> } path='/'/>
      <Route element={ <Selig /> } path='/selig'/>
      { brandsArray.map(({title, description, path, warranty}) => (<Route
        key={ title }
        element={
        <BrandPage title={title}
          warranty={warranty}
          description={description} /> }
          path={path}
        />
      ))}
      {serviceArray.map(({title, description, brands, path}) => (
        <Route
          key={ title }
          element={
            <ServicePage
              title={title}
              description={description}
              brands={brands}
              />
            }
          path={path}
        />
      ))}
    </Routes>
  </BrowserRouter>,
)
