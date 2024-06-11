import styles from "./App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResuts/SearchResuts";
import Playlist from "./components/Playlist/Playlist";

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Jammming</h1>
      <SearchBar />
      <div className={styles.app__body}>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
};

export default App;
