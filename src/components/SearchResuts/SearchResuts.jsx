import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

const SearchResuts = ({ tracks }) => {
  return (
    <div className={styles.search__results}>
      <h2>Search Results</h2>
      <div className={styles.search__results__list}>
        <Tracklist tracks={tracks} />
      </div>
    </div>
  );
};

export default SearchResuts;
//list of search results
//tracklist component to display tracks
