import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortContinue = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortContinue.signal})
                .then(response => {
                    if (!response.ok) {
                        throw Error("Could not fetch data");
                    }
                    return response.json();
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(error => {
                    if (error.name === "AbortError") {
                        console.log("Fetch aborted")
                    } else {
                    setIsLoading(false);
                    setError(error.message);
                    }
                })
        }, 500);

        return () => abortContinue.abort();

    }, [url]);

    return {data, isLoading, error}
}

export default useFetch;