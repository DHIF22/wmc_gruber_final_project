export interface APOD {
    date: Date;
    explanation: string;
    hdurl: string;
    media_type: "image" | "video";
    title: string;
    url: string;
}