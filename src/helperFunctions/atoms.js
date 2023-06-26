import { atom } from 'recoil';

export const apiKeyAtom = atom({
  key: 'apiKey',
  default: ''
})

export const tracksAtom = atom({
  key: 'tracks',
  default: []
})

export const playlistAtom = atom({
  key: 'playlist',
  default: []
})