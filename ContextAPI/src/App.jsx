import Parents from './Components/Parents';
import { createContext, useState } from 'react';

export const CounterContext = createContext(null);

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
       <CounterContext.Provider value={{count, setCount}}>
        <Parents /> 
       </CounterContext.Provider>
    </div>
  )
}

export default App;