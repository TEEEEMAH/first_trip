import { useState } from "react";
import "../styles/Home.css";

const destinations = [
  {
    name: "Canada",
      image:
"https://images.unsplash.com/photo-1503614472-8c93d56cdad9?auto=format&fit=crop&w=1200&q=80",
    score: "89%",
    budget: "$4,500",
    season: "Summer",
    className: "canada",
  },
  {
    name: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    score: "82%",
    budget: "$5,200",
    season: "Spring",
    className: "japan",
  },
  {
    name: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
    score: "85%",
    budget: "$4,800",
    season: "Autumn",
    className: "uk",
  },
  {
    name: "Australia",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=80",
    score: "80%",
    budget: "$6,000",
    season: "Winter",
    className: "australia",
  },
  {
    name: "Germany",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80",
    score: "87%",
    budget: "$5,100",
    season: "Spring",
    className: "germany",
  },
  {
    name: "UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    score: "84%",
    budget: "$3,800",
    season: "Winter",
    className: "uae",
  },
];
const features = [
  {
    icon: "🤖",
    title: "AI Travel Assistant",
    desc: "Receive personalized travel recommendations, destination matching, and preparation guidance powered by AI.",
  },

  {
    icon: "🛂",
    title: "Visa Guidance",
    desc: "Understand visa requirements, approval trends, processing timelines, and document expectations.",
  },

  {
    icon: "📋",
    title: "Smart Checklists",
    desc: "Automatically generate travel preparation checklists tailored to your destination and profile.",
  },

  {
    icon: "🌍",
    title: "Destination Intelligence",
    desc: "Compare countries using travel costs, visa insights, seasons, and AI-powered suitability scores.",
  },
];

const Home = () => {
  const [selectedDestination, setSelectedDestination] =
    useState(destinations[0]);

  const [searchValue, setSearchValue] = useState("");

  return (
    <main className="journey-home">

      {/* ================= HERO ================= */}
      <section className="journey-hero">

        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />

        <div className="hero-grid">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            <span className="hero-tag">
              AI-Powered Travel Preparation Platform
            </span>

            <h1>
              Plan Smarter.
              <br />
              Travel Confidently.
            </h1>

            <p className="hero-subtext">
              FirstTrip helps you plan international travel with AI-driven visa guidance,
              destination insights, personalized checklists, and step-by-step preparation
              so you never travel unprepared.
            </p>

            {/* SEARCH */}
            <div className="journey-search">

              <label></label>

              <div className="search-input-wrapper">
                <span className="search-icon">🔍</span>

                <input
                  type="text"
                  placeholder="Try: Canada, UK, Japan..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>

              <div className="search-suggestions">
                <span>Popular:</span>
                <button>Canada</button>
                <button>United Kingdom</button>
                <button>Japan</button>
              </div>
            </div>

            {/* CTA */}
            <div className="hero-buttons">

              <button className="primary-btn">
                Plan My Trip
              </button>

              <button className="secondary-btn">
                Explore Destinations
              </button>

            </div>
          </div>

          {/* RIGHT VISUALIZATION */}
          <div className="journey-universe">

            {/* particles */}
            <div className="space-particles">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i}></span>
              ))}
            </div>

            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />

            <div className="universe-center">
              <div className="traveler-core">
                <span>YOUR JOURNEY</span>
              </div>
            </div>

            {/* destination nodes */}
            {destinations.map((destination) => (
              <button
                key={destination.name}
                className={`destination-node ${destination.className}`}
                onMouseEnter={() => setSelectedDestination(destination)}
              >
                {destination.name}
              </button>
            ))}

            {/* preview */}
            <div className="destination-preview">

              <h3>{selectedDestination.name}</h3>

              <div className="preview-item">
                <span>Visa Success</span>
                <strong>{selectedDestination.score}</strong>
              </div>

              <div className="preview-item">
                <span>Budget</span>
                <strong>{selectedDestination.budget}</strong>
              </div>

              <div className="preview-item">
                <span>Best Season</span>
                <strong>{selectedDestination.season}</strong>
              </div>
            </div>

            {/* NEW: TRAVEL READINESS CARD */}
            <div className="readiness-card">

              <h4>Travel Readiness Score</h4>

              <div className="progress-item">
                <span>Passport Ready</span>
                <div className="bar"><div style={{ width: "80%" }} /></div>
              </div>

              <div className="progress-item">
                <span>Visa Requirements</span>
                <div className="bar"><div style={{ width: "70%" }} /></div>
              </div>

              <div className="progress-item">
                <span>Checklist Complete</span>
                <div className="bar"><div style={{ width: "60%" }} /></div>
              </div>

              <div className="progress-item">
                <span>Budget Prepared</span>
                <div className="bar"><div style={{ width: "75%" }} /></div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features-section">

  <div className="section-header">
    <span>WHY FIRSTTRIP</span>

    <h2>
      Everything You Need To Travel Smart
    </h2>

    <p>
      A complete AI-powered travel preparation platform designed
      to eliminate uncertainty from international travel.
    </p>
  </div>

  <div className="features-grid">

    {features.map((feature) => (
      <div className="feature-card" key={feature.title}>

        <div className="feature-icon">
          {feature.icon}
        </div>

        <h3>{feature.title}</h3>

        <p>{feature.desc}</p>

        <span className="feature-link">
          Learn More →
        </span>

      </div>
    ))}

  </div>

</section>

      {/* ================= DESTINATIONS ================= */}
      <section className="universe-section">

        <div className="section-header">
          <span>DISCOVER</span>
          <h2>Explore a World of Possibilities</h2>
          <p>
            Compare destinations using AI-powered travel intelligence and visa insights.
          </p>
        </div>

        <div className="destination-grid">

          {destinations.map((destination) => (
            <div className="destination-card" key={destination.name}>
  <div className="card-glow" />

  <div className="destination-image">
    <img
      src={destination.image}
      alt={destination.name}
    />
  </div>

  <div className="destination-content">
    <h3>{destination.name}</h3>

    <div className="destination-stats">
      <div>
        <span>Visa Score</span>
        <strong>{destination.score}</strong>
      </div>

      <div>
        <span>Budget</span>
        <strong>{destination.budget}</strong>
      </div>

      <div>
        <span>Season</span>
        <strong>{destination.season}</strong>
      </div>
    </div>
  </div>
</div>
          ))}

        </div>
      </section>

      {/* ================= ROADMAP ================= */}
      <section className="roadmap-section">

        <div className="section-header">
          <span>YOUR JOURNEY</span>
          <h2>See The Path Before You Travel</h2>
        </div>

        <div className="roadmap">
          {[
            "Profile Setup",
            "Document Review",
            "Visa Preparation",
            "Approval",
            "Flight Day",
          ].map((step, i) => (
            <div key={step} className="roadmap-step">
              <div className="step-dot" />
              <h3>{step}</h3>
              {i !== 4 && <div className="roadmap-line" />}
            </div>
          ))}
        </div>
      </section>

      {/* ================= AI INSIGHT ================= */}
      <section className="ai-section">

        <div className="ai-card">
          <span className="ai-label">AI TRAVEL INTELLIGENCE</span>

          <h2>
            Canada Shows Strong Travel Approval Potential
          </h2>

          <p>
            Based on visa patterns, financial readiness, and historical approval data,
            Canada remains one of the strongest destination matches for your profile.
          </p>

          <button className="primary-btn">
            View Full Analysis
          </button>
        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="final-journey">

        <h2>Your Next Journey Starts Today.</h2>

        <p>
          Build your travel plan, prepare your documents, and travel with confidence.
        </p>

        <button className="primary-btn">
          Get My Travel Checklist
        </button>

      </section>

    </main>
  );
};

export default Home;