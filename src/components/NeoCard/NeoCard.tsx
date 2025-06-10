import React from "react";
import "./NeoCard.css";
import type {NEO} from "../../models/NEO.ts";

type Props = {
    neo: NEO;
};

const NeoCard: React.FC<Props> = (Props) => {
    const {neo} = Props;

    const latestApproach = neo.close_approach_data?.[0];

    return (
        <div className="neo-card">
            <div>
                <h5 className="neo-title">{neo.name}</h5>
                <p className="neo-data">
                    <span className="neo-label">ID:</span> {neo.id}
                </p>
                <p className="neo-data">
                    <span className="neo-label">Magnitude:</span> {neo.absolute_magnitude_h}
                </p>
                <p className="neo-data">
                    <span className="neo-label">Estimated Diameter (km):</span> {neo.estimated_diameter.kilometers.estimated_diameter_min.toFixed(3)} - {neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(3)}
                </p>
                <p className="neo-data">
                    <span className="neo-label">Approach Date:</span> {latestApproach?.close_approach_date ?? "N/A"}
                </p>
                <p className="neo-data">
                    <span className="neo-label">Miss Distance (km):</span> {latestApproach?.miss_distance.kilometers ?? "N/A"}
                </p>
                <p className="neo-data">
                    <span className="neo-label">Velocity (km/h):</span> {latestApproach?.relative_velocity.kilometers_per_hour ?? "N/A"}
                </p>
                <p className={neo.is_potentially_hazardous_asteroid ? "neo-hazard" : "neo-safe"}>
                    {neo.is_potentially_hazardous_asteroid ? "Potentially Hazardous" : "Not Hazardous"}
                </p>
            </div>

            <div className="neo-footer">
                <a href={neo.nasa_jpl_url} target="_blank" rel="noopener noreferrer">
                    More Info →
                </a>
            </div>
        </div>
    );
};

export default NeoCard;
