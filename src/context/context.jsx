import { useContext, useEffect, useState } from "react";
import Spotify from "../components/Spotify/Spotify";
import { createContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      uri: "spotify:track:0VjIjW4GlUZAMYd2vXMi3b",
    },
    {
      id: 2,
      name: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      uri: "spotify:track:3Z8FwOEN59mRMxDCtb8N0A",
    },
    {
      id: 3,
      name: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
      uri: "spotify:track:5QO79kh1waicV47BqGRL3g",
    },
  ]);

  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 4,
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      uri: "spotify:track:6jG2YzhxptolDzLHTGLt7S",
    },
  ]);
  const [name, setName] = useState("");

  useEffect(() => {
    const token = Spotify.getAccessToken();
    console.log("Spotify Access Token:", token);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const addTrack = (track) => {
    // Check if the track is already in the playlist
    if (
      !playlistTracks.find((existingTrack) => existingTrack.id === track.id)
    ) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };
  const removeTrack = (track) => {
    setPlaylistTracks(
      playlistTracks.filter((existingTrack) => existingTrack.id !== track.id)
    );
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((track) => track.uri);
    console.log("Saving playlist to Spotify with URIs:", trackURIs);

    // Reset the playlist after saving
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  return (
    <AppContext.Provider
      value={{
        searchResults,
        playlistName,
        playlistTracks,
        name,
        handleNameChange,
        savePlaylist,
        addTrack,
        removeTrack,
        setPlaylistName,
        setPlaylistTracks,
        setSearchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
