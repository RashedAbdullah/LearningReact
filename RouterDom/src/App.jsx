import './Cssfile.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import About from './Components/About';
import Blog from './Components/Blog';
import Projects from './Components/Projects';
import Menu from './Components/Menu';
import Routs from './Components/Routes/Routs';
import MenuPage from './Components/Routes/MenuPage';


function App() {


  return (
    <div>
      {/* <HashRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/project' element={<Projects />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </HashRouter> */}

      {/* <MenuPage /> */}
      <Routs />
    </div>
  )
}

export default App;
