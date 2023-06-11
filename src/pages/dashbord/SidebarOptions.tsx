//material icons
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import GroupIcon from "@mui/icons-material/Group";
import DraftsIcon from "@mui/icons-material/Drafts";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MovingIcon from "@mui/icons-material/Moving";

//logout hook
import useLogout from "../../hooks/useLogout";

export default function SidebarOptions() {
  const { logout } = useLogout();
  return (
    <div className="sidebar-options">
      <div className="sidebar-options-feed">
        <p>Overview</p>
        <div className="icons-nav">
          <AlignHorizontalLeftIcon className="icon" />
          <span>Feed</span>
        </div>
        <div className="icons-nav">
          <CollectionsBookmarkIcon className="icon" />
          <span>Bookmarks</span>
        </div>
        <div className="icons-nav">
          <GroupIcon className="icon" />
          <span>Team blogs</span>
        </div>
        <div className="icons-nav">
          <DraftsIcon className="icon" />
          <span>Drafts</span>
        </div>
        <div className="icons-nav">
          <AnalyticsIcon className="icon" />
          <span>Analytics</span>
        </div>
      </div>
      <div className="sidebar-options-trending">
        <div className="header">
          <span className="trending-tags">Trending Tags</span>
          <MovingIcon />
        </div>
        <div className="trending-tags-nav">
          <p>Programming</p>
          <p>Data Science</p>
          <p>Technology</p>
          <p>Machine Learning</p>
          <p>Politics</p>

          <p>see all</p>
        </div>
      </div>

      <div className="sidebar-options-personal">
        <p className="personal">Personal</p>
        <div className="personal-nav">
          <div>
            <span>Account</span>
          </div>
          <div>
            <span>Notification</span>
          </div>
          <p className="logout" onClick={logout}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}
