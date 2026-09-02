import "./ActivityPage.css";
import ActivityCard from "../../components/ActivityCard/ActivityCard.jsx";

function ActivityPage() {
  return (
    <main className="activity-page">
      <section className="recent-activity">
        <h1>Recently Did...</h1>

        <div className="activity-row">
          <div className="featured-activity">
            Featured Activity
          </div>

          <ActivityCard title="Test" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade"/>
        </div>
      </section>
    </main>
  );
}

export default ActivityPage;