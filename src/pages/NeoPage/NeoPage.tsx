import React, { useEffect, useState } from "react";
import mockNeo from "../../resources/NEO_mock_data.json";
import useFetch from "../../hooks/useFetch.tsx";
import { NASA_API_KEY } from "../../constant.ts";
import NeoCard from "../../components/NeoCard/NeoCard.tsx";
import "./NeoPage.css";
import type {NEO} from "../../models/NEO.ts";
import NeoFilter from "../../components/NeoFilter.tsx";
import useToggle from "../../hooks/useToggle.tsx";

const NEOPage: React.FC = () => {
    const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${NASA_API_KEY}`;
    const { data, loading, error } = useFetch<any>(url);

    const [neoItems, setNeoItems] = useState<NEO[]>([]);
    const [onlyHazardous, toggleHazardous] = useToggle(false);

    useEffect(() => {
        if (data && data.near_earth_objects) {
            const allNeos = data.near_earth_objects;
            setNeoItems(allNeos);
        } else if (!data && error) {
            console.warn("Using mock NEO data due to fetch error");
            const mockData = mockNeo.near_earth_objects;
            setNeoItems(mockData);
        }
    }, [data, error]);

    const filteredNeos = onlyHazardous
        ? neoItems.filter((neo) => neo.is_potentially_hazardous_asteroid)
        : neoItems;

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Near-Earth Objects</h1>
            <NeoFilter onlyHazardous={onlyHazardous} onHazardousToggle={toggleHazardous}/>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-danger text-center">Could not fetch data. Showing mock data instead.</p>}

            <div className="neo-grid">
                {filteredNeos.map((neo) => (
                    <NeoCard key={neo.id} neo={neo} />
                ))}
            </div>
        </div>
    );
};

export default NEOPage;
