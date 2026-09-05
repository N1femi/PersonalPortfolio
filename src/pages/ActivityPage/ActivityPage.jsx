import "./ActivityPage.css";
import ItemCard from "../../components/ItemCard/ItemCard.jsx";

function ActivityPage() {
  return (
    <main className="activity-page">
      <section className="recent-activity">
        
        <div className="activity-row">

          <ItemCard class="featured-activity" title="Test" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade" />
          
          <ItemCard title="Test 2" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade" />
          <ItemCard title="Test 3" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade" />
          <ItemCard title="Im a testy test" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade"/>
          <ItemCard title="Testing Testing" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade"/>
          <ItemCard title="Anotha Test" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade" />
          <ItemCard title="Anotha Another Test" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade" />
          <ItemCard title="Anotha Another Test" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade" />
           <ItemCard title="Anotha Another Test" description="BlahBlahBlah Lalalala Boogeyman Boo" date="Some time last decade" />
        </div>
      </section>
    </main>
  );
}

export default ActivityPage;