import React from "react";
import TrackItem from './TrackItem';

function RandomGen() {
    console.log("Random")

    return (
        <div>
            <button id="randombutton">Generate Genre</button>
            {/* <button onClick={getRandomTracks}>Get Random Tracks</button> */}
            <p>You are on the Generator Page</p>
            <h2>Genre: {}</h2>
                <div>
                    <h2>Matching Tracks:</h2>
                    <TrackItem />
                </div>
        </div>
    )
}






export default RandomGen;