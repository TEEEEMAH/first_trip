import { useState } from "react";
import "../styles/Onboarding.css";
import {useNavigate} from "react-router-dom";   


const Onboarding = () => {
    const navigate = useNavigate();
  const [step, setStep] = useState(1);
const [countrySearch, setCountrySearch] = useState("");
  const [formData, setFormData] = useState({
    travelGoal: "",
    destinations: [],
    budget: "",
    experience: "",
  });

  const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Egypt",
  "Finland",
  "France",
  "Germany",
  "Ghana",
  "India",
  "Indonesia",
  "Ireland",
  "Italy",
  "Japan",
  "Kenya",
  "Malaysia",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Poland",
  "Portugal",
  "Qatar",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
];
const filteredCountries = countries.filter((country) =>
  country
    .toLowerCase()
    .includes(countrySearch.toLowerCase())
);
  const handleDestinationToggle = (country) => {
    setFormData((prev) => ({
      ...prev,
      destinations: prev.destinations.includes(country)
        ? prev.destinations.filter((item) => item !== country)
        : [...prev.destinations, country],
    }));
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const generateProfile = () => {
  alert("Travel Profile Created Successfully!");

  navigate("/dashboard");
};

  return (
    <div className="onboarding-page">
      <div className="onboarding-container">

        {/* HEADER */}

        <div className="onboarding-header">
          <h1>Create Your Travel Profile</h1>

          <p>
            Help FirstTrip understand your travel goals so we can personalize
            recommendations, destinations, visa insights, and travel plans.
          </p>

          <div className="step-indicator">
            Step {step} of 5
          </div>
        </div>

        {/* STEP 1 */}

        {step === 1 && (
          <div className="onboarding-card">
            <h2>What is your primary travel goal?</h2>

            <div className="options-grid">
              {[
                "Tourism",
                "Study",
                "Work",
                "Business",
                "Relocation",
              ].map((goal) => (
                <button
                  key={goal}
                  className={`option-btn ${
                    formData.travelGoal === goal ? "active" : ""
                  }`}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      travelGoal: goal,
                    })
                  }
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <div className="onboarding-card">
            <h2>Select countries you're interested in</h2>

            <div className="options-grid">
              {countries.map((country) => (
                <button
                  key={country}
                  className={`option-btn ${
                    formData.destinations.includes(country)
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleDestinationToggle(country)
                  }
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <div className="onboarding-card">
            <h2>Choose your travel budget</h2>

            <div className="options-grid">
              {[
                "$1,000 - $3,000",
                "$3,000 - $5,000",
                "$5,000 - $10,000",
                "$10,000+",
              ].map((budget) => (
                <button
                  key={budget}
                  className={`option-btn ${
                    formData.budget === budget
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      budget,
                    })
                  }
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <div className="onboarding-card">
            <h2>Your travel experience level</h2>

            <div className="options-grid">
              {[
                "First Time Traveler",
                "Occasional Traveler",
                "Frequent Traveler",
              ].map((level) => (
                <button
                  key={level}
                  className={`option-btn ${
                    formData.experience === level
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      experience: level,
                    })
                  }
                >
                  {level}
                </button>
                
              ))}
            </div>
          </div>
        )}

        {/* STEP 5 */}

        {step === 5 && (
          <div className="onboarding-card">
            <h2>Your Travel Profile Summary</h2>

            <div className="summary-box">
              <p>
                <strong>Travel Goal:</strong>{" "}
                {formData.travelGoal}
              </p>

              <p>
                <strong>Countries:</strong>{" "}
                {formData.destinations.join(", ")}
              </p>

              <p>
                <strong>Budget:</strong>{" "}
                {formData.budget}
              </p>

              <p>
                <strong>Experience:</strong>{" "}
                {formData.experience}
              </p>
            </div>

            <button
  className="generate-btn"
  onClick={generateProfile}
>
  Generate My Travel Profile
</button>
          </div>
        )}

        {/* NAVIGATION */}

        <div className="onboarding-navigation">
          {step > 1 && (
            <button
              className="secondary-btn"
              onClick={prevStep}
            >
              Previous
            </button>
          )}

          {step < 5 && (
            <button
              className="primary-btn"
              onClick={nextStep}
            >
              Next
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default Onboarding;