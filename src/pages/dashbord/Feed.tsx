// material icon

import EditIcon from "@mui/icons-material/Edit";
import ToggleFeeds from "./ToggleFeeds";
import PostContent from "./PostContent";

export default function Feed() {
  return (
    <main className="feed-container">
      <div className="feed-two">
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
      </div>
      <ToggleFeeds />
      <PostContent />
      <PostContent />
    </main>
  );
}
