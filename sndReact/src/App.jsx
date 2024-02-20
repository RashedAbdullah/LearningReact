     
import Props from './Components/Props/Props';

function App() {

  // Uni-directional flow: (parent to child)
  const person = {
    name: "Rashed Abdulalh",
    age: 24,
    profession: "Student"
  }

  return (
    <div>
    <Props person={person} />
    </div>
  )
}

export default App;