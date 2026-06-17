import { useState } from "react";
import "../styles/Trips.css";
import { Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";



const tripData = [
  {
    id: 1,
    country: "Canada",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56cd263",
    status: "Visa Preparation",
    progress: 82,
    departure: "July 2026",
  },
  {
    id: 2,
    country: "United Kingdom",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    status: "Upcoming",
    progress: 65,
    departure: "September 2026",
  },
  {
    id: 3,
    country: "Italy",
    flag: "🇮🇹",
    image:
      "https://images.unsplash.com/photo-1525874684015-58379d421a52",
    status: "Completed",
    progress: 100,
    departure: "March 2026",
  },
  {
    id: 4,
    country: "Australia",
    flag: "🇦🇺",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    status: "Planning",
    progress: 38,
    departure: "December 2026",
  },
];

const Trips = () => {
  const [search, setSearch] = useState("");

  const filteredTrips = tripData.filter((trip) =>
    trip.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
    <main className="trips-page">

      {/* HERO */}

      <section className="trips-hero">

  <div className="hero-content">

    <div>
      <h1>My Trips</h1>

      <p>
        Manage every journey, visa process,
        destination plan, and travel milestone
        from one intelligent dashboard.
      </p>
    </div>

    <Link to="/create-trip">
      <button className="create-trip-btn">
        + Create New Trip
      </button>
    </Link>

  </div>

</section>
      {/* STATS */}

      <section className="trip-stats">

        <div className="stat-card">
          <h2>12</h2>
          <span>Total Trips</span>
        </div>

        <div className="stat-card">
          <h2>3</h2>
          <span>Active</span>
        </div>

        <div className="stat-card">
          <h2>4</h2>
          <span>Upcoming</span>
        </div>

        <div className="stat-card">
          <h2>5</h2>
          <span>Completed</span>
        </div>

      </section>

      {/* SEARCH */}

      <section className="trip-search">

        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </section>
      

      {/* TRIPS GRID */}

      <section className="trips-grid">

        {filteredTrips.map((trip) => (
          <div
            key={trip.id}
            className="trip-card"
            style={{
              backgroundImage: `linear-gradient(
                rgba(2,6,23,.25),
                rgba(2,6,23,.85)
              ), url(${trip.image})`,
            }}
          >
            <div className="trip-overlay">

              <div className="trip-top">

                <span className="flag">
                  {trip.flag}
                </span>

                <span className="status-badge">
                  {trip.status}
                </span>

              </div>

              <h2>{trip.country}</h2>

              <p>
                Departure: {trip.departure}
              </p>

              <div className="progress-wrapper">

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${trip.progress}%`,
                    }}
                  />

                </div>

                <span>
                  {trip.progress}% Complete
                </span>

              </div>

              <Link to="/trip-details">
  <button className="trip-btn">
    View Details
  </button>
</Link>
            </div>
          </div>
        ))}

      </section>

    </main>
    </AppLayout>  
  );
};

export default Trips;