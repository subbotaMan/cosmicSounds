import './App.css';
import {tracksData} from "./data/data.tsx";
import type {Track} from "./types/types.ts";
import {Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header.tsx";
import TrackCard from "./components/TrackCard/TrackCard.tsx";
import Footer from "./components/Footer/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";
import About from "./components/Pages/About/About.tsx";
import FeedbackPage from "./components/Pages/Feedback/FeedbackPage.tsx";


function App() {
    return (
        <>
            <Header/>

            <main>
                <Routes>
                    <Route path="/" element={
                        <div className='tracks-grid'>
                            {tracksData.map((track: Track) => (
                                <TrackCard
                                    key={track.path}
                                    track={track}
                                />
                            ))}
                        </div>
                    }/>

                    <Route path="/about" element={<About />} />
                    <Route path="/feedback" element={<FeedbackPage />} />
                </Routes>
            </main>

            <ScrollToTop/>
            <Footer/>
        </>
    )
}

export default App
