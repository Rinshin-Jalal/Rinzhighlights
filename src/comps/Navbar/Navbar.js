import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <HashLink smooth to="/#top">
        <img src="/logo.png" className="logo" alt="Back Home btn" />
      </HashLink>
      <form className="search" action="/search/" method="get">
        <input type="text" placeholder="Search" name="q" required />
        <button type="submit">
          <img src="/search.svg" alt="Search" />
        </button>
      </form>
    </div>
  );
};

export default Navbar;
