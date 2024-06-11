// import { useGlobalContext } from "../../context/context";

// const Playlist = () => {
//   const { playlistName, playlistTrack } = useGlobalContext();
//   return (
//     <>
//       <div>{playlistName}</div>
//       <div>{playlistTrack}</div>
//     </>
//   );
// };

// export default Playlist;
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = () => {
  return (
    <div className={styles.playlist}>
      <h2>Playlist</h2>
      <Tracklist />
      <button className={styles.save__btn}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;
//playlist
//save to spotify btn
//tracklist to display tracks
