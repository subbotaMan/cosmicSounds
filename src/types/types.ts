export interface Track {
    path: string;
    cover?: string;
    artist: string;
    songName: string;
}

export interface TrackCardProps {
    track: Track;
}

export interface SocialLinks {
    name: string;
    url: string;
    icon: string;
    color: string;
}