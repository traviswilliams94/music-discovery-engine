

function PlaylistDisplay() {
    return (
        <div>
            <form>
                <label>Paste Link Here: </label>
                <input
                type="text"
                name="song"
                placeholder="Add a song!"
                />
                <button type="submit">Add Song!</button>
            </form>
        <p>Playlist will display here</p>
         </div>
    )
}

export default PlaylistDisplay;