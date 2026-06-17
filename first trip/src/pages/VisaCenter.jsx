import { useState } from "react";
import "../styles/VisaCenter.css";
import AppDrawer from "../components/Layout/AppDrawer";
import AppLayout from "../components/Layout/AppLayout";

const VisaCenter = () => {
  const [selectedCountry, setSelectedCountry] =
    useState("Canada");

  const visaData = {
    Canada: {
      successRate: "89%",
      processingTime: "14 Days",
      difficulty: "Medium",
      score: "94%",
    },
    UK: {
      successRate: "85%",
      processingTime: "18 Days",
      difficulty: "Medium",
      score: "91%",
    },
    Australia: {
      successRate: "84%",
      processingTime: "16 Days",
      difficulty: "Medium",
      score: "90%",
    },
    Italy: {
      successRate: "80%",
      processingTime: "20 Days",
      difficulty: "Moderate",
      score: "87%",
    },
  };

  const current = visaData[selectedCountry];

  return (
    <AppLayout>
    <main className="visa-center-page">

      {/* HERO */}

      <section className="visa-hero">

        <span className="visa-tag">
          VISA INTELLIGENCE CENTER
        </span>

        <h1>
          Check Your Visa Readiness
        </h1>

        <p>
          Get AI-powered visa insights,
          documentation guidance,
          approval probability, and
          travel readiness analysis.
        </p>

      </section>

      {/* COUNTRY SELECTOR */}

      <section className="country-selector">

        {Object.keys(visaData).map((country) => (
          <button
            key={country}
            className={
              selectedCountry === country
                ? "active-country"
                : ""
            }
            onClick={() =>
              setSelectedCountry(country)
            }
          >
            {country}
          </button>
        ))}

      </section>

      {/* SCORE CARD */}

      <section className="visa-score-section">

        <div className="score-card">

          <span>
            AI Travel Match Score
          </span>

          <h2>{current.score}</h2>

        </div>

      </section>

      {/* STATS */}

      <section className="visa-stats">

        <div className="visa-stat-card">
          <span>Visa Success Rate</span>
          <h3>{current.successRate}</h3>
        </div>

        <div className="visa-stat-card">
          <span>Processing Time</span>
          <h3>{current.processingTime}</h3>
        </div>

        <div className="visa-stat-card">
          <span>Difficulty Level</span>
          <h3>{current.difficulty}</h3>
        </div>

        <div className="visa-stat-card">
          <span>AI Confidence</span>
          <h3>High</h3>
        </div>

      </section>

      {/* DOCUMENTS */}

      <section className="documents-section">

        <div className="section-header">
          <h2>Required Documents</h2>
        </div>

        <div className="documents-grid">

          <div className="document-card">
            Passport
          </div>

          <div className="document-card">
            Financial Proof
          </div>

          <div className="document-card">
            Admission Letter
          </div>

          <div className="document-card">
            Medical Report
          </div>

          <div className="document-card">
            Biometrics
          </div>

          <div className="document-card">
            Travel History
          </div>

        </div>

      </section>

      {/* AI ANALYSIS */}

      <section className="analysis-section">

        <div className="analysis-card">

          <span>
            AI ANALYSIS
          </span>

          <h2>
            Your Profile Shows Strong
            Potential For {selectedCountry}
          </h2>

          <p>
            Based on destination trends,
            visa approval patterns,
            documentation readiness,
            and travel requirements,
            {selectedCountry} currently
            offers strong opportunities
            for qualified applicants.
          </p>

        </div>

      </section>

      {/* READINESS */}

      <section className="readiness-section">

        <div className="readiness-card">

          <h2>
            Travel Readiness Checklist
          </h2>

          <ul>
            <li>✓ Passport Available</li>
            <li>✓ Financial Documents</li>
            <li>✓ Academic Records</li>
            <li>✓ Medical Requirements</li>
            <li>✓ Visa Application Package</li>
          </ul>

        </div>

      </section>

    </main>
    </AppLayout>  
  );
};

export default VisaCenter;