import { useState } from "react";
import "../styles/Destinations.css";
import { Link } from "react-router-dom";


const countries = [
  {
    name: "Canada",
    flag: "🇨🇦",
    visa: "89%",
    match: "94%",
    cost: "Medium",
    scholarship: "High",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    visa: "84%",
    match: "87%",
    cost: "High",
    scholarship: "Medium",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    visa: "86%",
    match: "90%",
    cost: "Medium",
    scholarship: "High",
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    visa: "78%",
    match: "80%",
    cost: "Low",
    scholarship: "Medium",
  },
];

const Destinations = () => {
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    
      <main className="destinations-page">

      <section className="destinations-hero">

        <span className="page-tag">
          AI DESTINATION DISCOVERY
        </span>

        <h1>Find Your Perfect Destination</h1>

        <p>
          Explore countries using AI-powered
          travel intelligence and opportunity analysis.
        </p>

        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="destination-search"
        />

      </section>

      <section className="destinations-grid">

        {filteredCountries.map((country) => (
          <div
            key={country.name}
            className="destination-card"
          >
            <div className="country-flag">
              {country.flag}
            </div>
           
            <h2>{country.name}</h2>

            <div className="country-stats">
              <p>Visa Score: {country.visa}</p>
              <p>AI Match: {country.match}</p>
              <p>Cost: {country.cost}</p>
              <p>Scholarships: {country.scholarship}</p>
            </div>

            <Link to="/destination-details">
              <button>
               View Destination
            </button>
            </Link>
          </div>
        ))}

      </section>

    </main>
  
  );
};

export default Destinations;