import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url,obj) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
    axios.post(`${process.env.REACT_APP_API_URL}${url}`, obj)
      .then(res => {
        console.log(res);
        setData(res.data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setError(err.message);
        }
      })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data,  error };
}
 
export default useFetch;