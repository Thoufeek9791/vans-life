import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <Link to={"/"}>
          <h1>#VANLIFE</h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/vans" className="vans-link">
          VANS
        </Link>
        <Link to="/about" className="about-link">
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
