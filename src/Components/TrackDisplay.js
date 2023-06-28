import React from "react";
import Track from "./Track.js";

function TrackDisplay({tracks, inPlaylist}) {
    return (
      <div className="ui grid container" id="Tracklist">
        
        {tracks ? 
        tracks.map(track => {
          return <Track 
          key={track.id} 
          track={track}
          inPlaylist={inPlaylist}/>
        })
        : <h1>Loading...</h1>
        }
      </div>
    )
}

export default TrackDisplay;