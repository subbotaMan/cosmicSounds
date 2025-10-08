import './App.css'
import TrackCard from "./components/TrackCard/TrackCard.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {tracksData} from "./data/data.tsx";
import type {Track} from "./types/types.ts"


function App() {
    return (
        <>
            <h1 className='mainTitle'>create your own galaxy of tracks</h1>

            <div className='tracks-grid'>
                {tracksData.map((track: Track) => (
                    <TrackCard
                        key={track.path}
                        track={track}
                    />
                ))}
            </div>

            <Footer/>
        </>
    )
}

export default App
