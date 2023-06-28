import {useRecoilState} from 'recoil';
import { playlistAtom } from '../helperFunctions/atoms';
import {useState} from 'react';

export default function Track({ track, inPlaylist }) {
  const name = track.name;
  const artists = track.artists;
  const album = track.album;

  const [playlist, setPlaylist] = useRecoilState(playlistAtom);
  const [saveState, setSaveState] = useState("Save Track")

  //depending on where track component is rendered, the button will either add or remove
  function addToPlaylist() {
    setPlaylist([...playlist, track])
    setSaveState("Already Saved")
  }

  function removeFromPlaylist() {
    const editedList = playlist.filter(item => item.name !== name);
    setPlaylist(editedList);
  }

  return (
    <div className="ui cards eight wide column">
      <div className="ui content">
        <img className="ui small centered image" src={album.images[1].url} alt={album.name} />
        <div className="ui header">{name}</div>
        <div className="ui artist">
          {artists.map(artist => {
            return <div key={artist.name}><b>Artist: </b>{artist.name}</div>;
          })}
        </div>
        <div className="ui album">
          <b>Album: </b> {album.name}
        </div>
        {inPlaylist ?
          <button className='playlistbutton' onClick={removeFromPlaylist}>Remove from Saved Tracks</button>
          : <button className='playlistbutton' onClick={addToPlaylist}>{saveState}</button>}
      </div>
    </div>
  )
}  