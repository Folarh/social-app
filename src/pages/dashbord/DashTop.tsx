import User from "../../assets/user.png";

//material icons
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function DashTop() {
  return (
    <main className="dashtop">
      <div className="search">
        <ZoomOutIcon />
        <input type="text" placeholder="search chatter" />
      </div>
      <div className="user-icons">
        <NotificationsIcon />
        <img src={User} alt="user-image" />
      </div>
    </main>
  );
}
