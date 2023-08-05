import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'
import ProductPage from './pages/ProductPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={ <Home /> } path='/'/>
      <Route element={ <ProductPage title='LG' warranty={{with1: ['Caixas de som', 'Televisores', 'Mycrosystem','Máquinas de lavar','Ar condicionados','Microondas'], with2: ['Geladeiras', 'Adegas', 'Notebooks', 'All in one', 'Monitores'], without1: ['Caixas de som', 'Televisores', 'Mycrosystem', 'Máquinas de lavar', 'Ar condicionados', 'Microondas'], without2: ['Geladeiras', 'Adegas', 'Notebooks', 'All in one', 'Monitores'] }} description='A LG Corporation, fundada em 1947, é uma empresa sul-coreana que começou como um fabricante de produtos químicos e eletrônicos. Nos anos 1960, a LG começou a fabricar eletrônicos de consumo, como televisores e aparelhos de ar condicionado. Na década de 1990, entrou no mercado de telefonia móvel e ganhou reconhecimento global como um importante fabricante de celulares. Além disso, a LG possui divisões de eletrodomésticos, energia solar, sistemas de ar condicionado e soluções de negócios. A LG é conhecida por sua inovação, qualidade e alcance global.' /> } path='/lg' />
    </Routes>
  </BrowserRouter>,
)
