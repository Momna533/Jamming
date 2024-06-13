const clientId = "3ad4a7090c2e41c3bf298785f36ab47b";
const redirectUri = "http://localhost:5173/"; // Your Redirect URI registered with Spotify
const scopes = "playlist-modify-public"; // Scopes your app will request

const Spotify = {
  getAccessToken() {
    const accessToken = localStorage.getItem("spotify_access_token");
    const expirationTime = localStorage.getItem("spotify_token_expiry_time");

    if (accessToken && Date.now() < expirationTime) {
      return accessToken;
    }

    // Extract access token from URL if it's there
    const urlToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiry = window.location.href.match(/expires_in=([^&]*)/);

    if (urlToken && urlExpiry) {
      const token = urlToken[1];
      const expiresIn = Number(urlExpiry[1]);
      const expiryTime = Date.now() + expiresIn * 1000;

      // Store token and expiration time in localStorage
      localStorage.setItem("spotify_access_token", token);
      localStorage.setItem("spotify_token_expiry_time", expiryTime);

      // Clear the URL parameters
      window.history.pushState("Access Token", null, "/");

      return token;
    } else {
      // Redirect to Spotify authorization page
      const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(
        scopes
      )}&redirect_uri=${encodeURIComponent(redirectUri)}`;
      window.location.href = authorizeUrl;
    }
  },

  // Additional methods for making API requests will go here
};

export default Spotify;
