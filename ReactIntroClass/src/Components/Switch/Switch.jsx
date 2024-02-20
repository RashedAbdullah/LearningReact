
const Switch = () => {

    const status = true;
  
    switch(status){
        case true:
            return <div>This is true value</div>
        case false:
            return <div>This is false value</div>
    }
}

export default Switch;