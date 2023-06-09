//styles
import DashTop from "./DashTop";
import Feed from "./Feed";
import "./MainPage.css";
import PostContent from "./PostContent";
import ToggleFeeds from "./ToggleFeeds";

function MainPage() {
  return (
    <main className="main-page">
      <DashTop />
      <Feed />
      <ToggleFeeds />
      <PostContent />
      <PostContent />
    </main>
  );
}

export default MainPage;
