import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";
import { useGlobalContext } from "../../context/context";

const Playlist = ({ tracks }) => {
  const { name, handleNameChange } = useGlobalContext();
  return (
    <div className={styles.playlist}>
      <h2>Playlist</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <Tracklist tracks={tracks} isRemoval={true} />
      <button className={styles.save__btn}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;
//playlist
//save to spotify btn
//tracklist to display tracks
