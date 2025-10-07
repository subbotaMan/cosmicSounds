import type {TrackCardProps} from "../../types/types.ts";
import './TrackCard.css'

const TrackCard= ({track}: TrackCardProps) => {
    return (<div key={track.path} className="music-player">
        {/* Обложка */}
        <img
            src={track.cover || '../public/logos/defaultLogo.png'}
            alt={track.artist}
            className="album-cover"
        />

        {/* Исполнитель */}
        <div className="artist-title">{track.artist}</div>

        {/* Название песни */}
        <div className="song-title">{track.songName}</div>

        {/* Аудиоплеер */}
        <div className="audio-player">
            <audio controls>
                <source src={track.path} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>)
}

export default TrackCard;