// material icon

import EditIcon from "@mui/icons-material/Edit";

export default function Feed() {
  return (
    <section className="feed">
      <div className="feed-explore">
        <h1>FEED</h1>
        <p>Explore different content you’d love </p>
      </div>

      <div className="feed-post">
        <button>
          <EditIcon className="edit" />
          <span>Post a comment</span>
        </button>
      </div>
    </section>
  );
}
