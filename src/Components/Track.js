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

  function removeFromPlaylist() {
    const editedList = playlist.filter(item => item.name !== name);
    setPlaylist(editedList);
  }

  return (
    <div className="ui cards eight wide column">
      <img src={album.images[1].url} alt={album.name}/>
      <div className="ui header"><b>Title: </b>{name}</div>
      <div className="ui meta">
        {artists.map(artist => {
          return <div key={artist.name}><b>Artist: </b>{artist.name}</div>;
        })}
      </div>
      <div className="ui meta">
       <b>Album: </b> {album.name}
      </div>
      {inPlaylist ?
      <button className='playlistbutton' onClick={removeFromPlaylist}>Remove from Playlist</button>
      :<button className='playlistbutton' onClick={addToPlaylist}>Add to Playlist</button>}
    </div>
  )
}  