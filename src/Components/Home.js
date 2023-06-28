import React from "react";

function Home(){
    //console.log("Home")
    return(
        <div className="background">
        <div className="aboutus">
            <h2>About Us</h2>
            Welcome to the Music Discovery Engine! This app was built by two music lovers. The intention is to facilitate discovery of music in new genres to find new tracks and artists
            that you otherwise may not have known about. We hope you enjoy searching for new music and make sure to save the songs and artists that look interesting to you!
        </div>
        <br />
        <div className="aboutus">
            <p>This app was built by <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/travis-williams-dotcom/">Travis Williams</a> and <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/ryan-m-lindner/">Ryan Lindner</a>.</p>
            <p>Travis has been playing music since he started taking piano in 2005 as a punishment. Which it turned out he loved. A few years later, he started taking drum lessons which are now
                his primary instrument. You can find Travis playing drums around town in Denver with the cover band Cover? I Hardly Know Her, and there is a good chance you'll bump into him 
                at any or all of the myriad live music venues in the Denver Area. Travis enjoys all genres of music, for the most part, but is slightly partial to House, Melodic Hardcore, Funk,
                and whatever LCD Soundsystem qualifies as. 
            </p>
            <br />
            <p>Ryan is a nerd. He is very proud of the label and has been using it as a compliment
                for many years. He enjoys learning about anything and everything, and that makes
                most of life pretty enjoyable. He recommends finding ways to learn about something
                at all times. Ryan fills his time with video games, playing D&D with friends,
                practicing guitar and piano (he's no good at either, but the learning is the 
                important part), dancing, and practicing martial arts. His favorite genre is 
                definitely emo rock, but enjoys everything except badly tuned 4 chord country songs.
                The concept of favorite song is ridiculous, but his favorite song today is Happy by
                NF.
            </p>
        </div>
        <div className="legal">
            <h4>Built using the Spotify Web API</h4>
            <div className="ui medium image">
                <img src={"https://developer.spotify.com/images/guidelines/design/logo.png"}
                alt={"Spotify"}/>
            </div>
        </div>
        </div>
    )
}






export default Home;