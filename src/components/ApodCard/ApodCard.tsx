import React from "react";
import type {APOD} from "../../models/APOD.ts";
import "./ApodCard.css";

interface Props {
    apod: APOD;
}

const ApodCard: React.FC<Props> = (Props) => {
    const {apod} = Props;
    return (
        <div className="card">

            {apod.media_type === "image" && (
                <img src={apod.url} alt={apod.title} className="card__image" />
            )}

            <div className="card__content">
                <p className="card__title">{apod.title}</p>
                <p className="card__info">{apod.date}</p>
                <p className="card__description">{apod.explanation}</p>
                <p className="card__info">Source: NASA APOD</p>
            </div>
        </div>
    );
};

export default ApodCard;
