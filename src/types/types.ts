import type { ReactElement } from "react";

export interface Track {
    path: string;
    cover?: string;
    artist: string;
    songName: string;
}

export interface TrackCardProps {
    track: Track;
}

export interface socialLinksType {
    name: string;
    url: string;
    color: string;
    icon: ReactElement;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}