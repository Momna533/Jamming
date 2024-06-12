import { useContext, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
    },
    {
      id: 2,
      name: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
    },
    {
      id: 3,
      name: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
    },
  ]);

  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 4,
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
    },
  ]);
  const [name, setName] = useState("");
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
  return (
    <AppContext.Provider
      value={{
        searchResults,
        playlistName,
        playlistTracks,
        name,
        handleNameChange,
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
