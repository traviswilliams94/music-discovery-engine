import React from "react";
import Artist from "./Artist.js";
import { useRecoilValue } from "recoil";
import { artistsAtom } from "../helperFunctions/atoms.js";

export default function ArtistDisplay() {
  const artists = useRecoilValue(artistsAtom);
    return (
        <div className="artistList" id="artistlist">
        
        {artists ? 
        artists.map(artist => {
          return <Artist
          key={artist.name} 
          artist={artist}
          />
        })
        : <h1>Loading...</h1>
        }
      </div>
    )
}