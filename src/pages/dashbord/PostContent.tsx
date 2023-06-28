import UserImg from "../../assets/user.png";
// import postTmg from "../../assets/hero.png";

//materialui icons
import ForumIcon from "@mui/icons-material/Forum";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AnalyticsIcon from "@mui/icons-material/Analytics";

interface myComponentProp {
  url: string;
}

const PostContent: React.FC<myComponentProp> = ({ url }) => {
  return (
    <section className="post-content">
      <div className="post-user-info">
        <div className="post-image">
          <img src={UserImg} />
        </div>
        <div className="post-user-desc">
          <h3>Grace ikpeng</h3>
          <p>Product desinger .May 25th, 2023</p>
        </div>
      </div>

      {/* post details and information */}
      <div className="post-info">
        <h2>Starting out as a Product designer</h2>
        <span>
          <p>icon</p>
          <p>10 mins read</p>
        </span>
        <p className="post-description">
          Embarking on a journey as a product designer can be an exhilarating
          and fulfilling experience. As a profession that bridges the realms of
          art, technology, and problem-solving, product design offers an
          opportunity to shape the way people interact with the world around
          them.
        </p>
        <img src={url} />
        <div className="post-icons">
          <span>
            <ForumIcon />
            <p>300</p>
          </span>
          <span>
            <FavoriteBorderIcon />
            <p>120</p>
          </span>
          <span>
            <AnalyticsIcon />
            <p>2980 views</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default PostContent;
