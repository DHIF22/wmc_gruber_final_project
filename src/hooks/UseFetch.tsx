import { useState, useEffect } from "react";

const useFetch = <Type,>(url: string) => {
    const [data, setData] = useState<Type | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const json = await response.json();
                if (!isCancelled) {
                    setData(json);
                }
            } catch (err) {
                if (!isCancelled) {
                    setError((err as Error).message);
                }
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isCancelled = true;
        };
    }, [url]);

    return { data, loading, error };
};

export default useFetch;