import React from "react";
import Track from "./Track.js";

function TrackDisplay({tracks, getID, inPlaylist}) {
    return (
        <div className="TrackList" id="Tracklist">
        
        {tracks ? 
        tracks.map(track => {
          return <Track 
          key={track.name} 
          track={track}
          getID={getID}
          inPlaylist={inPlaylist}/>
        })
        : <h1>Loading...</h1>
        }
      </div>
    )
}

export default TrackDisplay;