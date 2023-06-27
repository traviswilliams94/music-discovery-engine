
export default function Artist({artist}) {
  console.log(artist.genres);
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