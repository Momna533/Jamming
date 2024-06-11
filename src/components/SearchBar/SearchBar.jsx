import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder="Search" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
//text input
//search btn
