import { useEffect, useState } from 'react'

export const useFetch = (URL) => {

    const [data, setData] = useState(null);

    const [error, setEroor] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{

            try {
                const fetchAPI = await fetch(URL);
                const datafetch = await fetchAPI.json();
                setData(datafetch);
            }catch(err){
                setEroor(err);
            } 
            }
            fetchData();
    },[URL])
  return { data, error}
}