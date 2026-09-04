import "./Header.css";
import profileImage from "../../assets/images/profile.jpg"

function Header() {
  return (
    <header className="portfolio-header">
      <div className="profile-section">
        <img class="profile-image" src={profileImage} alt="Profile Picture"></img>
        <span>Nifemi</span>
      </div>

      <nav class="portfolio-nav">
        <a href="#">Activity</a>
        <a href="#">Library</a>
        <a href="#">News</a>
        <a href="#">Bio</a>
      </nav>
    </header>
  );
}

export default Header;