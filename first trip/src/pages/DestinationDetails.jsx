import { Link } from "react-router-dom";
import "../styles/DestinationDetails.css";

const DestinationDetails = () => {
  return (
    <main className="destination-details-page">

      {/* HERO */}

      <section className="destination-hero">

        <div className="hero-overlay"></div>

        <div className="destination-hero-content">

          <span className="destination-tag">
            AI DESTINATION INTELLIGENCE
          </span>

          <h1>🇨🇦 Canada</h1>

          <p>
            Discover opportunities, visa insights,
            education pathways, and travel intelligence
            powered by AI.
          </p>

          <div className="match-score">
            <span>AI Match Score</span>
            <h2>94%</h2>
          </div>

        </div>

      </section>

      {/* QUICK STATS */}

      <section className="stats-grid">

        <div className="stat-card">
          <span>Visa Success Rate</span>
          <h3>89%</h3>
        </div>

        <div className="stat-card">
          <span>Cost of Living</span>
          <h3>Medium</h3>
        </div>

        <div className="stat-card">
          <span>Scholarships</span>
          <h3>High</h3>
        </div>

        <div className="stat-card">
          <span>Processing Time</span>
          <h3>14 Days</h3>
        </div>

      </section>

      {/* AI INSIGHT */}

      <section className="ai-insight-section">

        <div className="ai-insight-card">

          <span className="section-tag">
            AI RECOMMENDATION
          </span>

          <h2>
            Canada Is One Of The Strongest
            Opportunities Right Now
          </h2>

          <ul>
            <li>✓ Strong education pathways</li>
            <li>✓ High post-study opportunities</li>
            <li>✓ Excellent quality of life</li>
            <li>✓ High visa approval probability</li>
            <li>✓ Strong job market for graduates</li>
          </ul>

        </div>

      </section>

      {/* TOP CITIES */}

      <section className="cities-section">

        <div className="section-header">
          <h2>Top Cities</h2>
        </div>

        <div className="cities-grid">

          <div className="city-card">
            <h3>Toronto</h3>
            <p>Financial & Education Hub</p>
          </div>

          <div className="city-card">
            <h3>Vancouver</h3>
            <p>Technology & Lifestyle</p>
          </div>

          <div className="city-card">
            <h3>Montreal</h3>
            <p>Culture & Innovation</p>
          </div>

          <div className="city-card">
            <h3>Calgary</h3>
            <p>Business & Energy Sector</p>
          </div>

        </div>

      </section>

      {/* UNIVERSITIES */}

      <section className="universities-section">

        <div className="section-header">
          <h2>Top Universities</h2>
        </div>

        <div className="universities-grid">

          <div className="university-card">
            University of Toronto
          </div>

          <div className="university-card">
            University of British Columbia
          </div>

          <div className="university-card">
            McGill University
          </div>

          <div className="university-card">
            University of Waterloo
          </div>

        </div>

      </section>

      {/* REQUIREMENTS */}

      <section className="requirements-section">

        <div className="section-header">
          <h2>Travel Requirements</h2>
        </div>

        <div className="requirements-grid">

          <div className="requirement-card">
            Passport
          </div>

          <div className="requirement-card">
            Financial Proof
          </div>

          <div className="requirement-card">
            Admission Letter
          </div>

          <div className="requirement-card">
            Medical Report
          </div>

          <div className="requirement-card">
            Biometrics
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="destination-cta">

        <div className="cta-card">

          <div>
            <h2>Ready To Start Your Journey?</h2>

            <p>
              Create a personalized travel plan
              and let AI guide your next steps.
            </p>
          </div>

          <Link to="/create-trip">
            <button className="start-trip-btn">
              Start Trip Planning
            </button>
          </Link>

        </div>

      </section>

    </main>
  );
};

export default DestinationDetails;