import { useState } from "react";
import { Link } from "react-router-dom";
import AppDrawer from "./AppDrawer";
import "../../styles/AppLayout.css";

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <AppDrawer
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="app-layout">

        <header className="app-topbar">

          <div className="topbar-left">

            <button
              className="menu-toggle"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>

            <div className="app-brand">
              <h3>FirstTrip</h3>
              <span>AI Travel OS</span>
            </div>

          </div>

          <div className="topbar-right">

            <Link
              to="/notifications"
              className="notification-button"
            >
              🔔
            </Link>

            <Link
              to="/profile"
              className="profile-button"
            >
              FO
            </Link>

          </div>

        </header>

        <main className="app-content">
          {children}
        </main>

      </div>
    </>
  );
};

export default AppLayout;