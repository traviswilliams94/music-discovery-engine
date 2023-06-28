import React from "react";
import PlaylistDisplay from "./PlaylistDisplay";

function PlaylistPage() {

    return (
        <div className="background">
            
            <h2 className="ui header">My Saved Tracks</h2>
            <PlaylistDisplay />
        </div>
    )
}
export default PlaylistPage;