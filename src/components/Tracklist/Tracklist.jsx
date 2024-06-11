import styles from "./Tracklist.module.css";
import { useGlobalContext } from "../../context/context";

const Track = ({ name, artist, album }) => {
  return (
    <div className={styles.track}>
      <p>
        {name} by {artist} from {album}
      </p>
    </div>
  );
};
const Tracklist = () => {
  const { tracks } = useGlobalContext();
  return (
    <div className={styles.tracklist}>
      {tracks.map((track) => (
        <Track key={track.id} {...track} />
      ))}
    </div>
  );
};

export default Tracklist;
//list of track components
//track - displays single track in list , name,artist,album
