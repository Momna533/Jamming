import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResuts/SearchResuts";
import Playlist from "./components/Playlist/Playlist";
import { useGlobalContext } from "./context/context";

const App = () => {
  const { searchResults, playlistTracks } = useGlobalContext();
  return (
    <div className={styles.app}>
      <h1>Jammming</h1>
      <SearchBar />
      <div className={styles.app__body}>
        <SearchResults tracks={searchResults} />
        <Playlist tracks={playlistTracks} />
      </div>
    </div>
  );
};

export default App;
