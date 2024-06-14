import { useGlobalContext } from "../../context/context";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, handleSearch, searchSpotify } =
    useGlobalContext();
  return (
    <div className={styles.searchbar}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
