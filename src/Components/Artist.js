
export default function Artist({artist}) {
  
  return (
    <div className="ui card four wide column">
      <div className="artistimage">
      {artist.images.length > 0 ? <img className="ui small image" src={artist.images[1].url} />
      : null}
      </div>
      <div className="ui header">{artist.name}</div>
      <div className="ui meta">genres:
      {artist.genres.map(genre => {
        return <div className="ui meta">{genre}</div>;
      })}
      
      </div>
    </div>
  )
}
