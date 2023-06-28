//icons
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import AnalyticsIcon from "@mui/icons-material/Analytics";

//images

//styles
import "./Goals.css";
import Card from "./Card";

export default function Goals() {
  return (
    <main className="goals">
      <h1>Why you should join chatter</h1>
      <p>
        Why you should join chatter Our goal is to make writers and readers see
        our platform as their next heaven for blogging, ensuring ease in
        interactions, connecting with like-minded peers, have access to favorite
        content based on interests and able to communicate your great ideas with
        people
      </p>
      <div className="cards">
        <Card
          icon={<AnalyticsIcon />}
          header="Analytics"
          info="Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time"
        />

        <Card
          icon={<AutoGraphRoundedIcon />}
          header="Social Interactions"
          info="Users on the platform can interact with posts they like, comment and engage in discussions"
        />

        <Card
          icon={<Diversity3RoundedIcon />}
          header="Content Creation"
          info="Write nice and appealing with our in-built markdown, a rich text editor"
        />
      </div>
    </main>
  );
}
