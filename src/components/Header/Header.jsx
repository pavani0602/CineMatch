import './Header.css';
// import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Header(props) {
  // Destructure props for cleaner code
  const { title, links, isLoggedIn , userProfileImg } = props;

  return (
    <header>
      <div className="left">
        <NavLink to="/">
          <h1>{title}</h1>
        </NavLink>
      </div>
      
      <div className="middle">
        {links.map((link) => (
          <NavLink key={link} to={link==='Home' ? '/' : `/${link.toLowerCase()}`}>
            {link}
          </NavLink>
        ))}
      </div>

      <div className="right">
        {isLoggedIn ? (
          <>
            <NavLink to="/contact" className="contact-link">
              Contact Us
            </NavLink>
            <img 
              src={userProfileImg || "default-avatar.png"} 
              alt="Profile" 
              className="profile-icon" 
            />
          </>
        ) : (
          <>
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
