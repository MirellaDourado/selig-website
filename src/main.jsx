import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Selig from './pages/Selig.jsx'
import { brandsArray } from './data.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={ <Home /> } path='/'/>
      <Route element={ <Selig /> } path='/selig'/>
      { brandsArray.map(({title, description, path, warranty}) => (<Route
        key={ title }
        element={
        <ProductPage title={title}
          warranty={warranty}
          description={description} /> }
          path={path}
        />
))}
    </Routes>
  </BrowserRouter>,
)
