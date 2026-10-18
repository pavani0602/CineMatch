import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Cine<span>Match</span>
          </Link>
          <p>
            Every great story deserves to be discovered.
            Find your next favorite film with CineMatch.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/discover">Discover Movies</Link>
          <Link to="/watchlist">Watchlist</Link>
          <Link to="/favorites">Favorites</Link>
        </div>

        <div className="footer-note">
          <h3>Your next story awaits.</h3>
          <p>
            Discover stories. Save favorites.
            Build your own movie collection.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} CineMatch. Made for movie lovers.
        </p>

        <a href="#top" onClick={scrollToTop} className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;