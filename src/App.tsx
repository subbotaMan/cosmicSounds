import './App.css';
import {tracksData} from "./data/data.tsx";
import type {Track} from "./types/types.ts";

import Header from "./components/Header/Header.tsx";
import TrackCard from "./components/TrackCard/TrackCard.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
    return (
        <>
            <Header />

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
