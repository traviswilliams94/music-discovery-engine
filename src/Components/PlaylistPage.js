import React from "react";
import PlaylistDisplay from "./PlaylistDisplay";

function PlaylistPage({playlist}) {
    //console.log("Playlist")

    return (
        <div>
            <p>You are on the Playlist Page</p>
            <PlaylistDisplay playlist={playlist}/>
        </div>
    )
}






export default PlaylistPage;