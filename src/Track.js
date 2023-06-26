
export default function Track({ track, getID }) {

  const name = track.name;
  const artists = track.artists;
  const album = track.album;

  //TODO connect css library into classnames
  return (
    <div className="">
      <div className="">{name}</div>
      <div className="">
        {artists.map(artist => {
          return <div key={artist.name}>{artist.name}</div>;
        })}
      </div>
      <div className="">
        {album.name}
      </div>
      <button onClick={() => {getID(track)}}>Get ID</button>
    </div>
  )
}