import { Link } from "react-router-dom";
import "../../styles/AppDrawer.css"; 

const AppDrawer = ({
sidebarOpen,
setSidebarOpen,
}) => {
return (
<>
{sidebarOpen && (
<div
className="sidebar-overlay"
onClick={() =>
setSidebarOpen(false)
}
/>
)}


  <div
    className={`app-drawer ${
      sidebarOpen ? "open" : ""
    }`}
  >
    <button
      className="close-drawer"
      onClick={() =>
        setSidebarOpen(false)
      }
    >
      ✕
    </button>

    <div className="drawer-logo">
      <h2>FirstTrip</h2>
      <span>AI Travel OS</span>
    </div>

    <Link to="/Home"
    onClick={() =>
          setSidebarOpen(false)
        }
        > Home
      </Link>


    <nav className="drawer-nav">

      <Link
        to="/dashboard"
        onClick={() =>
          setSidebarOpen(false)
        }
      >
         Dashboard
      </Link>

      <Link
        to="/trips"
        onClick={() =>
          setSidebarOpen(false)
        }
      >
         Trips
      </Link>

      <Link
        to="/destinations"
        onClick={() =>
          setSidebarOpen(false)
        }
      >
         Destinations
      </Link>

      <Link
        to="/visa-center"
        onClick={() =>
          setSidebarOpen(false)
        }
      >
         Visa Center
      </Link>

      <Link
        to="/ai-assistant"
        onClick={() =>
          setSidebarOpen(false)
        }
      >
         AI Assistant
      </Link>

      <Link
        to="/checklist"
        onClick={() =>
          setSidebarOpen(false)
        }
      >
         Checklist
      </Link>

      <Link
        to="/notifications"
        onClick={() =>
          setSidebarOpen(false)
        }
      >
         Notifications
      </Link>

      <Link
        to="/profile"
        onClick={() =>
          setSidebarOpen(false)
        }
      >
        👤 Profile
      </Link>
      
      <Link
      to="/settings"
      onClick={() => setSidebarOpen(false)}
       >
      ⚙️ Settings
      </Link>
    </nav>
  </div>
</>


);
};

export default AppDrawer;
