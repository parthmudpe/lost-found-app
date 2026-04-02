import { Link } from 'react-router-dom';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h1>🎒 Campus Lost & Found</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Report Item</Link>

        <button onClick={() => setDarkMode(prev => !prev)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;