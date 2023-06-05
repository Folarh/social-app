//styles
import "./Dashboard.css";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <Sidebar />
      <MainPage />
    </section>
  );
}
