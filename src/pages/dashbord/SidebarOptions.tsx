//material icons
import AlignHorizontalLeftIcon from "@mui/icons-material/AlignHorizontalLeft";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import GroupIcon from "@mui/icons-material/Group";
import DraftsIcon from "@mui/icons-material/Drafts";
import AnalyticsIcon from "@mui/icons-material/Analytics";

export default function SidebarOptions() {
  return (
    <div className="sidebar-options">
      <p>Overview</p>
      <div>
        <AlignHorizontalLeftIcon />
        <span>Feed</span>
      </div>
      <div>
        <CollectionsBookmarkIcon />
        <span>Bookmarks</span>
      </div>
      <div>
        <GroupIcon />
        <span>Team blogs</span>
      </div>
      <div>
        <DraftsIcon />
        <span>Drafts</span>
      </div>
      <div>
        <AnalyticsIcon />
        <span>Analytics</span>
      </div>
    </div>
  );
}
