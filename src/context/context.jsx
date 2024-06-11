import { useContext, useState } from "react";
import { createContext } from "react";
const tracks = [
  {
    id: 0,
    name: "name 1",
    artist: "artist 1",
    album: "album 1",
  },
  {
    id: 1,
    name: "name 2",
    artist: "artist 2",
    album: "album 2",
  },
  {
    id: 2,
    name: "name 3",
    artist: "artist 3",
    album: "album 3",
  },
  {
    id: 3,
    name: "name 4",
    artist: "artist 4",
    album: "album 4",
  },
];

const AppContext = createContext();
const AppProvider = ({ children }) => {
  // const [data, setData] = useState(spotify);
  // const [playlistName, setPlaylistName] = useState("mock playlist Name");
  // const [playlistTrack, setPlaylistTrack] = useState("mock playlist Track");
  return (
    <AppContext.Provider
      value={{
        tracks,
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
