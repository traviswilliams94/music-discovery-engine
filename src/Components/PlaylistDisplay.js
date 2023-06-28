import TrackDisplay from "./TrackDisplay.js";
import { playlistAtom } from "../helperFunctions/atoms.js";
import {useRecoilValue} from "recoil";

function PlaylistDisplay() {
    const playlist = useRecoilValue(playlistAtom);

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
            <div className="buffer">
            </div>
            <div>
                <TrackDisplay tracks={playlist} inPlaylist={true}/>
            </div>
            <div className="ui medium image">
                <img src={"https://developer.spotify.com/images/guidelines/design/logo.png"}
                alt={"Spotify"}/>
            </div>
         </div>
    )
}

export default PlaylistDisplay;