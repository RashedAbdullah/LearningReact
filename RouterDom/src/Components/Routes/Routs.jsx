
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './../pages/HomePage';
import Projects from './../pages/Projects';
import BlogPage from './../pages/BlogPage';
import InfoPage from './../pages/InfoPage';
import AboutPage from './../pages/AboutPage';
import NotFound from '../pages/NotFound';
import MenuPage from './MenuPage';

const Routs = () => {
  return (
    <div>
        <BrowserRouter>
        <MenuPage />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/project' element={<Projects />}/>
            <Route path='/blog' element={<BlogPage />}/>
            <Route path='/info' element={<InfoPage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routs;