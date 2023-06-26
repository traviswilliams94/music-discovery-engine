import React from "react";
import Track from "./Track.js";

function TrackDisplay({tracks, inPlaylist}) {
    return (
        <div className="TrackList" id="Tracklist">
        
        {tracks ? 
        tracks.map(track => {
          return <Track 
          key={track.name} 
          track={track}
          inPlaylist={inPlaylist}/>
        })
        : <h1>Loading...</h1>
        }
      </div>
    )
}

export default TrackDisplay;