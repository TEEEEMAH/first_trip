import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const hideNavbarRoutes = [
  "/dashboard",
  "/profile",
  "/trips",
  "/create-trip",
  "/trip-details",
  "/checklist",
  "/notifications",
  "/settings",
];

if (hideNavbarRoutes.includes(location.pathname)) {
  return null;
}
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">

        {/* LOGO */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <h2>FirstTrip</h2>
            <span>AI Travel OS</span>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/destinations">
            Destinations
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

        
          <Link to="/visa-center">
            Visa Center
          </Link>

          <Link to="/ai-assistant">
            AI Assistant
          </Link>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="nav-actions">

          <Link
            to="/login"
            className="nav-login-btn"
          >
            Login
          </Link>

          <Link to="/register">
            <button className="cta-btn">
              Get Started
            </button>
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setMobileMenuOpen(true)}
        >
          ☰
        </button>

      </nav>

      {/* OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`mobile-menu ${
          mobileMenuOpen ? "open" : ""
        }`}
      >

        <button
          className="close-menu"
          onClick={closeMenu}
        >
          ✕
        </button>

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link
          to="/destinations"
          onClick={closeMenu}
        >
          Destinations
        </Link>

        <Link
          to="/dashboard"
          onClick={closeMenu}
        >
          Dashboard
        </Link>

        <Link
          to="/checklist"
          onClick={closeMenu}
        >
          Checklist
        </Link>

        <Link
          to="/trips"
          onClick={closeMenu}
        >
          Trips
        </Link>

        <Link
          to="/visa-center"
          onClick={closeMenu}
        >
          Visa Center
        </Link>

        <Link
          to="/ai-assistant"
          onClick={closeMenu}
        >
          AI Assistant
        </Link>

        <Link
          to="/login"
          onClick={closeMenu}
        >
          Login
        </Link>

        <Link
          to="/register"
          className="mobile-register-btn"
          onClick={closeMenu}
        >
          Get Started
        </Link>

      </div>
    </>
  );
};

export default Navbar;