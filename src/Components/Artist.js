
export default function Artist({artist}) {
  return (
    <div className="ui card four wide column">
      <img className="ui small image" src={artist.images[1].url}/>
      <div className="ui header">{artist.name}</div>
      <div className="ui meta">genres:
      {artist.genres.map(genre => {
        return <div className="ui meta">{genre}</div>;
      })}
      </div>
    </div>
  )
}