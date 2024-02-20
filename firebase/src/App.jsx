import './App.css'
import WithGoogle from './withGoogle/WithGoogle';
import WithGithub from './withGithub/WithGithub';
import WithFacebook from './withFacebook/WithFacebook';
import WithMicrosoft from './withMicrosoft/WithMicrosoft';

function App() {

  return (
    <div>
      <WithGoogle />
      <WithGithub />
      <WithFacebook />
      <WithMicrosoft />
    </div>
  )
}

export default App
