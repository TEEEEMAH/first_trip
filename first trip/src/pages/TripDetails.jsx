import "../styles/TripDetails.css";
import { Link } from "react-router-dom";

const TripDetails = () => {
  return (
    <main className="trip-details-page">

      {/* HERO */}

      <section className="trip-hero">

        <div className="hero-left">

          <span className="trip-tag">
            AI TRAVEL COMMAND CENTER
          </span>

          <h1>Canada Journey</h1>

          <p>
            Study Visa Pathway • Departure July 2026
          </p>

        </div>

        <div className="hero-score">

          <div className="score-circle">
            <h2>82%</h2>
            <span>Ready</span>
          </div>

        </div>

      </section>

      {/* OVERVIEW */}

      <section className="overview-grid">

        <div className="overview-card">
          <span>Destination</span>
          <h3>Canada 🇨🇦</h3>
        </div>

        <div className="overview-card">
          <span>Purpose</span>
          <h3>Study</h3>
        </div>

        <div className="overview-card">
          <span>Budget</span>
          <h3>$10,000</h3>
        </div>

        <div className="overview-card">
          <span>Status</span>
          <h3>Visa Preparation</h3>
        </div>

      </section>

      {/* TIMELINE */}

      <section className="timeline-section">

        <div className="section-header">
          <h2>Journey Timeline</h2>
        </div>

        <div className="timeline">

          <div className="timeline-item completed">
            <div className="timeline-dot"></div>
            <p>Profile Completed</p>
          </div>

          <div className="timeline-item completed">
            <div className="timeline-dot"></div>
            <p>Destination Selected</p>
          </div>

          <div className="timeline-item completed">
            <div className="timeline-dot"></div>
            <p>Documents Uploaded</p>
          </div>

          <div className="timeline-item active">
            <div className="timeline-dot"></div>
            <p>Visa Preparation</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p>Embassy Submission</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p>Flight Booking</p>
          </div>

        </div>

      </section>

      {/* AI INSIGHTS */}

      <section className="insights-section">

        <div className="insight-card">

          <span className="card-tag">
            AI ANALYSIS
          </span>

          <h2>Travel Intelligence Report</h2>

          <ul>
            <li>✓ Strong financial profile detected</li>
            <li>✓ High visa approval probability</li>
            <li>⚠ Proof of accommodation required</li>
            <li>⚠ Medical report pending</li>
            <li>✓ Recommended submission date: June 15</li>
          </ul>

        </div>

      </section>

      {/* DOCUMENTS */}

      <section className="documents-section">

        <div className="section-header">
          <h2>Documents</h2>
        </div>

        <div className="documents-grid">

          <div className="document-card uploaded">
            <h3>Passport</h3>
            <span>Uploaded</span>
          </div>

          <div className="document-card uploaded">
            <h3>Bank Statement</h3>
            <span>Uploaded</span>
          </div>

          <div className="document-card missing">
            <h3>Admission Letter</h3>
            <span>Missing</span>
          </div>

          <div className="document-card pending">
            <h3>Medical Report</h3>
            <span>Pending</span>
          </div>

        </div>

      </section>

      {/* CHECKLIST */}

      <section className="checklist-preview">

        <div className="checklist-card">

          <div>
            <h2>Travel Checklist</h2>
            <p>85% Completed</p>
          </div>
          <Link to="/checklist">
          <button>
            View Full Checklist
             </button>
            </Link>

            
        </div>

      </section>

    </main>
  );
};

export default TripDetails;