import React from "react";
import "./NeoFilter.css"

interface NeoFilterProps {
    onlyHazardous: boolean;
    onHazardousToggle: () => void;
}

const NeoFilter: React.FC<NeoFilterProps> = (Props) => {
    const { onlyHazardous, onHazardousToggle } = Props;

    return (
        <div className="neo-filter mb-4 d-flex align-items-center">
            <div className="form-check">

                <label className="filterContainer">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={onlyHazardous}
                        onChange={onHazardousToggle}
                        id="hazardousCheck"
                    />
                    <div className="checkmark"></div>
                    Only show hazardous
                </label>
            </div>
        </div>
    );
};

export default NeoFilter;
