import "./Header.css";

function Header() {
  return (
    <header className="portfolio-header">
      <div className="profile">
        <span>Nifemi</span>
      </div>

      <nav>
        <a href="#">Activity</a>
        <a href="#">Library</a>
        <a href="#">News</a>
        <a href="#">Bio</a>
      </nav>
    </header>
  );
}

export default Header;