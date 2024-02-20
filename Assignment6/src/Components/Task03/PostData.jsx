import { useEffect, useState } from "react";
import Posts from './Posts';


const PostData = () => {
    const [manage, setManage] = useState([]);
    const URL = `https://jsonplaceholder.typicode.com/posts`;
    useEffect(()=>{
        fetch(URL)
        .then(res=> res.json())
        .then(data=> setManage(data));
    },[]);

  return (
    <div className='grid'>
        {
            manage.map(data=>{
                return <Posts key={data.id} fullData={data}/>
            })
        }
    </div>
  )
}

export default PostData;