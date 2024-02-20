import React from 'react'

const SndUseRef = ({type, placeholder}, ref) => {
  return (
    <div>
        <input ref={ref} type={type} placeholder={placeholder}/>
    </div>
  )
}

const ForwardedInput = React.forwardRef(SndUseRef);

export default ForwardedInput;