import {useRecoilState} from 'recoil';
import { playlistAtom } from '../helperFunctions/atoms';

export default function Track({ track, inPlaylist }) {
  const name = track.name;
  const artists = track.artists;
  const album = track.album;

  const [playlist, setPlaylist] = useRecoilState(playlistAtom);

  //depending on where track component is rendered, the button will either add or remove
  function addToPlaylist() {
    setPlaylist([...playlist, track])
  }
  //remove currently breaks if you add the same song more than once, TODO fix
  function removeFromPlaylist() {
    const editedList = playlist.filter(item => item.name !== name);
    setPlaylist(editedList);
  }

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
      <button onClick={removeFromPlaylist}>Remove from Playlist</button>
      :<button onClick={addToPlaylist}>Add to Playlist</button>}
    </div>
  )
}  