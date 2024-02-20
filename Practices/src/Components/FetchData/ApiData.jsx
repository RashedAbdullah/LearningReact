import React, { useEffect, useState } from 'react'

const ApiData = () => {
    const [managedata, setmanageData] = useState([]);
    // const URL = `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/sitecontent/ar/ar/json`;

    const URL = `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/articles/ar/ar/1/25/json`
    // const URL = `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/videos/ar/ar/1/25/json`
    // const URL = `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/showall/ar/ar/1/25/json`;
    // const URL = `https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/news/ar/ar/1/25/json`
    useEffect(()=>{
        fetch(URL)
        .then(res=> res.json())
        .then(data => setmanageData(data.data));
    },[])
    console.log(managedata)
  return (
    <div>

            {
                managedata.map((video, index)=>(
                    // console.log(video.image)
                    <div key={index}>
                         <p>{video.title}</p>
                    </div>
                ))
            }

    </div>
  )
}
export default ApiData;
