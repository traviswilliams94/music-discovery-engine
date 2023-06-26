import React from "react";
import TrackItem from './TrackItem';

function RandomGen() {
    console.log("Random")

    return (
        <div>
            <p>You are on the Generator Page</p>
            {/* <button onClick={getRandomTracks}>Get Random Tracks</button> */}
            <TrackItem />
        </div>
    )
}






export default RandomGen;