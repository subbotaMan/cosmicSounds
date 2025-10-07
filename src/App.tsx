import './App.css'
import TrackCard from "./components/TrackCard/TrackCard.tsx";
import Footer from "./components/Footer/Footer.tsx";


function App() {
    //============================DATA===========================//
    const tracksData = [
        {
            artist: 'first song',
            songName: 'first song Name',
            path: '../public/tracks/1.mp3',
            cover: '../public/covers/default-cover.png'
        },
        {artist: 'second song', songName: 'second song Name', path: '../public/tracks/2.mp3'},
        {artist: 'second song', songName: 'three song Name', path: '../public/tracks/2.mp3'},
        {artist: 'second song', songName: 'four song Name', path: '../public/tracks/2.mp3'},
    ]

    //===============================MAIN==========================//
    return (
        <>
            <h1 className='mainTitle'>create your own galaxy of tracks</h1>

            <div className='tracks-grid'>
                {tracksData.map((track) => (
                    <TrackCard
                        key={track.path}
                        track={track}
                    />
                ))}
            </div>

            <Footer />
        </>
    )
}

export default App
