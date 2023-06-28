
export default function Artist({artist}) {
  return (
    <div className="">
      {/*TODO styling*/}
      <div className="">{artist.name}</div>
      <div className="">genres:
      {artist.genres.map(genre => {
        return <div className="">{genre}</div>;
      })}
      </div>
    </div>
  )
}