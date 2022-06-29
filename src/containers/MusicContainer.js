import React, {useState, useEffect} from 'react';
import MusicTable from '../components/MusicTable';
import SelectGenre from '../components/SelectGenre';

const MusicContainer = () => {

    const [songs, setSongs] = useState([]); 


    const genres = {
        all: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json',
        rock: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json',
        dance: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json',
        country: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json'
    }

    const [genre, setGenre] = useState('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')

    const onGenreSelected = (genre) => {
        setGenre(genre)
    }

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = () => {
        fetch(genre)
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
    }
       
    
    return (
        <>
            <SelectGenre genres={genres} onGenreSelected={onGenreSelected}/>
            <MusicTable songs={songs}/>
        </>
    )   
}

export default MusicContainer