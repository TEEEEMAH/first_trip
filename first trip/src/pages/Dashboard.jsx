import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";

const Dashboard = () => {
  return (
    <AppLayout>

      <div className="dashboard">
       
        {/* ================= HERO EXPERIENCE ================= */}

        <section className="travel-hero">

          <div className="hero-overlay">

            <div className="hero-content">

              <span className="hero-badge">
                AI TRAVEL INTELLIGENCE
              </span>

              <h1>
                Explore The World Smarter
              </h1>

              <p>
                FirstTrip analyzes destinations, visa readiness,
                travel costs, and opportunities to help you make
                better travel decisions.
              </p>

              <div className="hero-actions">

                <button className="primary-btn">
                  Start New Journey
                </button>

                <button className="secondary-btn">
                  AI Travel Assistant
                </button>

              </div>

            </div>

            <div className="floating-destinations">

              <div className="floating-card">
                🇨🇦 Canada • 92% Match
              </div>

              <div className="floating-card">
                🇬🇧 UK • 88% Match
              </div>

              <div className="floating-card">
                🇩🇪 Germany • 84% Match
              </div>

            </div>

          </div>

        </section>

        {/* ================= AI MATCH ENGINE ================= */}

        <section className="match-engine">

          <div className="section-title">

            <h2>AI Destination Match Engine</h2>

            <p>
              Destinations selected specifically for your profile.
            </p>

          </div>

          <div className="match-list">

            <div className="match-item">

              <div>
                <h3>🇨🇦 Canada</h3>
                <p>Excellent study and immigration pathways.</p>
              </div>

              <span>92%</span>

            </div>

            <div className="match-item">

              <div>
                <h3>🇬🇧 United Kingdom</h3>
                <p>Strong education and career opportunities.</p>
              </div>

              <span>88%</span>

            </div>

            <div className="match-item">

              <div>
                <h3>🇩🇪 Germany</h3>
                <p>Affordable education and growing economy.</p>
              </div>

              <span>84%</span>

            </div>

          </div>

        </section>

        {/* ================= DREAM DESTINATIONS ================= */}

        <section className="dream-destinations">

          <div className="section-title">

            <h2>Dream Destinations</h2>

            <p>
              Explore destinations recommended by AI.
            </p>

          </div>

          <div className="destination-grid">

            <div className="destination-card canada">
              <div className="card-overlay">
                <h3>Canada</h3>
                <span>Mountain Adventures</span>
              </div>
            </div>

            <div className="destination-card japan">
              <div className="card-overlay">
                <h3>Japan</h3>
                <span>Future Meets Tradition</span>
              </div>
            </div>

            <div className="destination-card uk">
              <div className="card-overlay">
                <h3>United Kingdom</h3>
                <span>World Class Education</span>
              </div>
            </div>

          </div>

        </section>

        {/* ================= DIGITAL PASSPORT ================= */}

        <section className="passport-section">

          <div className="passport-card">

            <div className="passport-header">
              <span>FIRSTTRIP DIGITAL PASSPORT</span>
            </div>

            <h2>Explorer Level 4</h2>

            <div className="passport-stats">

              <div>
                <h3>21</h3>
                <p>Countries Viewed</p>
              </div>

              <div>
                <h3>6</h3>
                <p>Trips Planned</p>
              </div>

              <div>
                <h3>82%</h3>
                <p>Travel Readiness</p>
              </div>

            </div>

          </div>

        </section>

        {/* ================= ROADMAP ================= */}

        <section className="roadmap-section">

          <div className="section-title">

            <h2>Your Travel Roadmap</h2>

            <p>
              AI-generated preparation journey.
            </p>

          </div>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <h3>Profile Completed</h3>
                <p>Travel profile successfully generated.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <h3>Upload Passport</h3>
                <p>Required for readiness analysis.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <h3>Financial Verification</h3>
                <p>Improve visa approval chances.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <h3>Application Ready</h3>
                <p>Expected readiness above 90%.</p>
              </div>
            </div>

          </div>

        </section>

      </div>

    </AppLayout>
  );
};

export default Dashboard;