import styles from "./Tracklist.module.css";
import { useGlobalContext } from "../../context/context";

const Track = ({ track, isRemoval }) => {
  const { addTrack, removeTrack } = useGlobalContext();
  return (
    <div className={styles.track}>
      <p>
        {track.name} by {track.artist} from {track.album}
      </p>
      {isRemoval ? (
        <button
          className={styles.remove__btn}
          onClick={() => removeTrack(track)}
        >
          -
        </button>
      ) : (
        <button className={styles.add__btn} onClick={() => addTrack(track)}>
          +
        </button>
      )}
    </div>
  );
};
const Tracklist = ({ tracks, isRemoval }) => {
  return (
    <div className={styles.tracklist}>
      {tracks.map((track) => (
        <Track key={track.id} track={track} isRemoval={isRemoval} />
      ))}
    </div>
  );
};

export default Tracklist;
//list of track components
//track - displays single track in list , name,artist,album
