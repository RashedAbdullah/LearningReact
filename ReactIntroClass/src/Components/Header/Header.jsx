
import './Header.css';


function Header() {

    const alertFunc = (myName)=>{
        alert("Hello world " + myName);
    }
    let marks = 90;

    const arr = ["Rashed", "Faruque", "Irfan", "Noman", "Labib"]

  return (
    <div>

        {/* events */}
        <button onClick={()=>{
            alertFunc("Rashed Abdullah");
        }}>Show alert</button>
        
        {/* inline css */}
        <p style={{textAlign: 'center',
                    color: "red",
                    fontSize: "30px"
        }}>{Date()}</p>

        {/* inline turnery operator */}
        <div>
            {marks >= 80? <p>you are success</p>: <p> Your are fail</p>}
        </div>

        {/* inline if else  than we need to IIFE and need also return */}

        <div>
            {(
                ()=>{
                if(marks >= 80 && marks <= 100){
                    return <p>youre great! {marks}</p>
                }else if(marks >100){
                    return <p>This is imposible over: {marks}</p>
                } else {
                    return <p>You are right now not a success man! {marks}</p>
                }
            }
            )()}
        </div>

        {/* map in array, also need return*/}
        <ol>
            {arr.map((value, index)=>{
                return <li key={index}>{value}</li>
            })}
        </ol>
    </div>
  )
}

export default Header;