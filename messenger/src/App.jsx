import './css/App.css';
import Signin from './components/fbSignin/Signin';
import Home from './components/msnger/Home';

const App = () => {
  return (
    <div>
      <Signin />
      <Home/>
    </div>
  )
}

export default App;