import { atom } from 'recoil';

export const apiKeyAtom = atom({
  key: 'apiKey',
  default: ''
})

export const randomTracksAtom = atom({
  key: 'randomTracks',
  default: []
})

export const searchTracksAtom = atom({
  key: 'searchTracks',
  default: []
})

export const playlistAtom = atom({
  key: 'playlist',
  default: []
})

export const artistsAtom = atom({
  key: 'artists',
  default: []
})
