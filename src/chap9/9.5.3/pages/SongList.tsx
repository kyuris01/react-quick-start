import { SongType } from "../../9.5.3/App";
import { Link, Outlet } from "react-router-dom";

type Props = { songs: Array<SongType> };

const SongList = (props: Props) => {
  let list = props.songs.map((song) => {
    return (
      <li className="list-group-item" key={song.id}>
        <Link to={`/songs/${song.id}`} style={{ textDecoration: "none" }}>
          {song.title} ( {song.musician} )
          <span className="float-end badge bg-secondary">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });
  return (
    <div>
      <h2 className="mt-4 mb-2">Song List</h2>
      <ul className="list-group">{list}</ul>
      <Outlet />
    </div>
  );
};

export default SongList;
