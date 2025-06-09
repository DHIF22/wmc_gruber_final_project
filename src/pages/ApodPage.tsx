import React, { useEffect, useState } from "react";
import ApodCard from "../components/ApodCard/ApodCard";
import mockData from "../resources/APOD_mock_data.json";
import type { APOD } from "../models/APOD.ts";
import { NASA_API_KEY } from "../constant.ts";
import useFetch from "../hooks/useFetch.tsx";

const ApodPage: React.FC = () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

    const [apodItem, setApodItem] = useState<APOD>(mockData);

    const { data, loading, error } = useFetch<APOD>(url);

    useEffect(() => {
        if (data && !loading && !error) {
            setApodItem(data);
        } else if (!data && !loading && error) {
            console.warn("Using mock data due to fetch error.");
            setApodItem(mockData);
        }
    }, [data, loading, error]);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Astronomy Picture of the Day</h1>

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-danger text-center">Could not fetch data. Showing mock data instead.</p>}

            <div className="row justify-content-center gap-4">
                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <ApodCard apod={apodItem} />
                </div>
            </div>
        </div>
    );
};

export default ApodPage;
