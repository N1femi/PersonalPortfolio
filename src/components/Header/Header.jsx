import "./Header.css";
import profileImage from "../../assets/images/profile.jpg"

function Header() {
  const profileName = "NotN1femi"


  return (
    <header className="portfolio-header">
      <div className="profile-section">
        <img className="profile-image" src={profileImage} alt="Profile Picture" />
        <span>{profileName}</span>
      </div>

      <nav className="portfolio-nav">
        <a href="#">Activity</a>
        <a href="#">Library</a>
        <a href="#">News</a>
        <a href="#">Bio</a>
      </nav>

      <div className="time-section">
        Sept 4, 2026 | Wednesday 11:50 AM
      </div>
    </header>
  );
}

export default Header;