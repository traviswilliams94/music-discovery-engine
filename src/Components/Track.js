
export default function Track({ track, getID, inPlaylist }) {

  console.log(track);
  const name = track.name;
  const artists = track.artists;
  const album = track.album;

  //TODO connect css library into classnames
  return (
    <div className="">
      <img src={album.images[2].url} alt={album.name}/>
      <div className="">{name}</div>
      <div className="">
        {artists.map(artist => {
          return <div key={artist.name}>{artist.name}</div>;
        })}
      </div>
      <div className="">
        {album.name}
      </div>
      {inPlaylist ?
      <></> //TODO reformat getID to pass back inplaylist to change functionality to removal
      :<button onClick={() => {getID(track)}}>Get ID</button>}
    </div>
  )
}