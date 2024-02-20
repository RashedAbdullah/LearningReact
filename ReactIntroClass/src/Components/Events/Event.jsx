import React from 'react'

const Event = () => {
    const postData = (e)=>{
        e.preventDefault();
        console.log("Hello world!");
        alert("Form submited");
    }
  return (
    <div>
        <form action="" onSubmit={postData}>
            <input type="text" placeholder='Input your name'/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Event;