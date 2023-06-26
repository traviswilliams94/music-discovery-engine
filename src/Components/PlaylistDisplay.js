import TrackDisplay from "./TrackDisplay.js";

function PlaylistDisplay(playlist) {
    //TODO maybe fix playlist (it is very barely different from tracks, but maybe thats good?)
    let populatedPlaylist = false;
    if (playlist.playlist.length !== 0) {
        populatedPlaylist = true;
    }

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
            <div>
                {populatedPlaylist ?
                <TrackDisplay tracks={playlist.playlist} inPlaylist={true}/>
                : "Playlist will display here"}
            </div>
            <img src={"https://developer.spotify.com/images/guidelines/design/logos.svg"}
            alt={"Spotify"}/>
         </div>
    )
}

export default PlaylistDisplay;