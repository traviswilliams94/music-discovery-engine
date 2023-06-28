import TrackDisplay from "./TrackDisplay.js";
import { playlistAtom } from "../helperFunctions/atoms.js";
import {useRecoilValue} from "recoil";

function PlaylistDisplay() {
    const playlist = useRecoilValue(playlistAtom);

    return (
        <div>
           <div>
                <TrackDisplay tracks={playlist} inPlaylist={true}/>
            </div>
            <img src={"https://developer.spotify.com/images/guidelines/design/logo.png"}
            alt={"Spotify"}/>
         </div>
    )
}

export default PlaylistDisplay;