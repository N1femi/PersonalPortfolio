import "./ActivityPage.css";
import ActivityCard from "../../components/ActivityCard/ActivityCard.jsx";

function ActivityPage() {
  return (
    <main className="activity-page">
      <section className="recent-activity">
        
        <div className="activity-row">

          <ActivityCard class="featured-activity" title="Test" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade" />
          
          <ActivityCard title="Test 2" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade" />
          <ActivityCard title="Test 3" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade" />
          <ActivityCard title="Im a testy test" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade"/>
          <ActivityCard title="Testing Testing" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade"/>
          <ActivityCard title="Anotha Test" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade" />
          <ActivityCard title="Anotha Another Test" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade" />
          
        </div>
      </section>
    </main>
  );
}

export default ActivityPage;