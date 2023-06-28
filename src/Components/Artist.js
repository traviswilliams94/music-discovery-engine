
export default function Artist({artist}) {
  return (
    <div className="ui cards four wide column">
      <div className="ui header">{artist.name}</div>
      <div className="ui meta">genres:
      {artist.genres.map(genre => {
        return <div className="ui meta">{genre}</div>;
      })}
      </div>
    </div>
  )
}