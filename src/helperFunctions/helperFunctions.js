
//functions that don't display anything are in here for code readability

export function generateRequestFromSeeds(seedGenres , seedTracks, seedArtists) {
  let stringRequest = "";
  if (seedTracks !== undefined && seedArtists !== undefined) {
    stringRequest = `https://api.spotify.com/v1/recommendations?seed_artists=${seedArtists}&seed_genres=${seedGenres}&seed_tracks=${seedTracks}`;
  }
  else if (seedTracks !== undefined) {
    stringRequest = `https://api.spotify.com/v1/recommendations?seed_genres=${seedGenres}&seed_tracks=${seedTracks}`;
  }
  else if (seedArtists !== undefined) {
    stringRequest = `https://api.spotify.com/v1/recommendations?seed_artists=${seedArtists}&seed_genres=${seedGenres}`;
  }
  else {
    stringRequest = `https://api.spotify.com/v1/recommendations?seed_genres=${seedGenres}`;
  }
  return stringRequest;
}