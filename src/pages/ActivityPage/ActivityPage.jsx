import "./ActivityPage.css";

function ActivityPage() {
  return (
    <main className="activity-page">
      <section className="recent-activity">
        <h1>Recently Did...</h1>

        <div className="activity-row">
          <div className="featured-activity">
            Featured Activity
          </div>

          <div className="activity-card">Activity</div>
          <div className="activity-card">Activity</div>
          <div className="activity-card">Activity</div>
        </div>
      </section>
    </main>
  );
}

export default ActivityPage;