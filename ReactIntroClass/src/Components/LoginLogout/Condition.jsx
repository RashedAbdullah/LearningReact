import Login from "./Login";
import Signin from "./Signin";


const Condition = () => {
    let isLogin = true;
  return (
    <div>
        {
            isLogin? <Login/> : <Signin/>
        }
    </div>
  )
}

export default Condition;