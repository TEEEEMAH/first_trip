import { useState } from "react";
import "../styles/CreateTrips.css";

const destinations = [
  "Canada",
  "United Kingdom",
  "Australia",
  "Italy",
  "Germany",
  "Japan",
];

const purposes = [
  "Study",
  "Work",
  "Tourism",
  "Business",
  "Immigration",
];

const CreateTrip = () => {
  const [destination, setDestination] = useState("");
  const [purpose, setPurpose] = useState("");
  const [budget, setBudget] = useState(5000);
  const [timeline, setTimeline] = useState("6 Months");

  return (
    <main className="create-trip-page">

      {/* HEADER */}

      <section className="create-trip-header">

        <span className="page-tag">
          AI TRAVEL PLANNER
        </span>

        <h1>Create Your Next Journey</h1>

        <p>
          Let AI build a personalized travel roadmap
          based on your goals, destination, budget,
          and timeline.
        </p>

      </section>

      {/* FORM */}

      <section className="trip-builder">

        {/* DESTINATION */}

        <div className="builder-card">

          <h2>Destination</h2>

          <select
            value={destination}
            onChange={(e) =>
              setDestination(e.target.value)
            }
          >
            <option value="">
              Select Destination
            </option>

            {destinations.map((country) => (
              <option
                key={country}
                value={country}
              >
                {country}
              </option>
            ))}
          </select>

        </div>

        {/* PURPOSE */}

        <div className="builder-card">

          <h2>Travel Purpose</h2>

          <div className="purpose-grid">

            {purposes.map((item) => (
              <button
                key={item}
                className={
                  purpose === item
                    ? "purpose-btn active"
                    : "purpose-btn"
                }
                onClick={() =>
                  setPurpose(item)
                }
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        {/* BUDGET */}

        <div className="builder-card">

          <h2>Budget</h2>

          <input
            type="range"
            min="1000"
            max="20000"
            step="500"
            value={budget}
            onChange={(e) =>
              setBudget(e.target.value)
            }
          />

          <h3>
            $
            {Number(budget).toLocaleString()}
          </h3>

        </div>

        {/* TIMELINE */}

        <div className="builder-card">

          <h2>Travel Timeline</h2>

          <select
            value={timeline}
            onChange={(e) =>
              setTimeline(e.target.value)
            }
          >
            <option>1 Month</option>
            <option>3 Months</option>
            <option>6 Months</option>
            <option>1 Year</option>
          </select>

        </div>

      </section>

      {/* AI SUMMARY */}

      <section className="ai-summary">

        <div className="summary-card">

          <span className="summary-tag">
            AI GENERATED SUMMARY
          </span>

          <h2>Your Travel Blueprint</h2>

          <div className="summary-grid">

            <div>
              <span>Destination</span>
              <strong>
                {destination || "Not Selected"}
              </strong>
            </div>

            <div>
              <span>Purpose</span>
              <strong>
                {purpose || "Not Selected"}
              </strong>
            </div>

            <div>
              <span>Budget</span>
              <strong>
                $
                {Number(budget).toLocaleString()}
              </strong>
            </div>

            <div>
              <span>Timeline</span>
              <strong>{timeline}</strong>
            </div>

          </div>

          <div className="ai-recommendation">

            <h3>AI Recommendation</h3>

            <p>
              Based on your current selections,
              AI predicts a strong travel readiness
              profile. The next step is to prepare
              documentation and begin destination
              planning.
            </p>

          </div>

          <button className="generate-btn">
            Generate Full Travel Plan
          </button>

        </div>

      </section>

    </main>
  );
};

export default CreateTrip;