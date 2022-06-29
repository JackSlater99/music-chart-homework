import React from 'react'

const SelectGenre = ({ genres, onGenreSelect }) => {

    const handleSelect = (event) => {
        const chosenGenre = genres[event.target.value];
        onGenreSelect(chosenGenre);
    }

    return (
        <>
            <label htmlFor="genre">Choose a genre:</label>
            <select name="genre" onChange={handleSelect}>
                <option value="all">All</option>
                <option value="rock">Rock</option>
                <option value="country">Country</option>
                <option value="dance">Dance</option>
            </select>
        </>
    )
}

export default SelectGenre;