import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";
import { useGlobalContext } from "../../context/context";

const Playlist = ({ tracks }) => {
  const { name, handleNameChange, savePlaylist } = useGlobalContext();
  return (
    <div className={styles.playlist}>
      <h2>Playlist</h2>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        className={styles.playlist__input}
      />
      <Tracklist tracks={tracks} isRemoval={true} />
      <button className={styles.save__btn} onClick={savePlaylist}>
        Save to Spotify
      </button>
    </div>
  );
};

export default Playlist;
