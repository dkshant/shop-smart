import { useEffect, useState } from "react";

function useFetch(url){

    const[dataContent, setDataContent] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(function(){
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw error('could not fetch the data for this resource')
            }
            else{
                return response.json()
            }
        })
        .then(data => {
            console.log(data);
            setDataContent(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(error => {
            setError(error.message);
            setIsLoading(false);
        })
    }, [url])

    return {dataContent, isLoading, error}
}

export default useFetch;