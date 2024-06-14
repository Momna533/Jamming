// const clientId = "3ad4a7090c2e41c3bf298785f36ab47b";
// const redirectUri = "http://localhost:5173/";
const Spotify = {
  getAccessToken() {
    const accessToken = localStorage.getItem("spotify_access_token");
    const expirationTime = localStorage.getItem("spotify_token_expiry_time");

    if (accessToken && Date.now() < expirationTime) {
      return accessToken;
    }

    const urlToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiry = window.location.href.match(/expires_in=([^&]*)/);

    if (urlToken && urlExpiry) {
      const token = urlToken[1];
      const expiresIn = Number(urlExpiry[1]);
      const expiryTime = Date.now() + expiresIn * 1000;

      localStorage.setItem("spotify_access_token", token);
      localStorage.setItem("spotify_token_expiry_time", expiryTime);

      window.history.pushState("Access Token", null, "/");

      return token;
    } else {
      window.location.href = authorizeUrl;
    }
  },

  searchTracks(searchTerm) {
    const accessToken = this.getAccessToken();
    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(
      searchTerm
    )}`;

    return fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.tracks) {
          return [];
        }
        return data.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },

  getCurrentUserId() {
    const accessToken = this.getAccessToken();
    const endpoint = "https://api.spotify.com/v1/me";

    return fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => data.id);
  },

  createPlaylist(userId, playlistName) {
    const accessToken = this.getAccessToken();
    const endpoint = `https://api.spotify.com/v1/users/${userId}/playlists`;

    return fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playlistName,
        description: "New playlist created with Jammming",
        public: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => data.id);
  },

  addTracksToPlaylist(playlistId, trackUris) {
    const accessToken = this.getAccessToken();
    const endpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

    return fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: trackUris,
      }),
    });
  },

  savePlaylist(playlistName, trackUris) {
    if (!playlistName || !trackUris.length) {
      return;
    }

    this.getCurrentUserId()
      .then((userId) => this.createPlaylist(userId, playlistName))
      .then((playlistId) => this.addTracksToPlaylist(playlistId, trackUris));
  },
};

export default Spotify;
