import { useEffect,useState } from "react";
import axios from 'axios'

export default function useFetch(url) {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    const fetchData= async () => {
        try {
        const {data: responseData}=await axios.get(url);
        setData(responseData);
        setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return {error,loading,data};
    
}
