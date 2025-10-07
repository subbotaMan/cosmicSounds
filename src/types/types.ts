export interface Track {
    path: string;
    cover?: string;
    artist: string;
    songName: string;
}

export interface TrackCardProps {
    track: Track;
}