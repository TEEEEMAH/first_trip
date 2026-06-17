import "../styles/Profile.css";
import AppLayout from "../components/Layout/AppLayout";

const Profile = () => {
return ( 
<AppLayout>
<main className="profile-page">

  <section className="profile-hero">
    <div className="profile-avatar">
      FO
    </div>

    <div className="profile-info">
      <span className="profile-tag">
        TRAVEL PROFILE
      </span>

      <h1>Fateemah Odunola</h1>

      <p>
        Manage your travel identity,
        destinations, preferences,
        and travel readiness.
      </p>
    </div>
  </section>

  <section className="profile-stats">

    <div className="profile-stat-card">
      <span>Travel Score</span>
      <h3>94%</h3>
    </div>

    <div className="profile-stat-card">
      <span>Visa Readiness</span>
      <h3>89%</h3>
    </div>

    <div className="profile-stat-card">
      <span>Trips Planned</span>
      <h3>12</h3>
    </div>

    <div className="profile-stat-card">
      <span>Saved Destinations</span>
      <h3>8</h3>
    </div>

  </section>

  <section className="profile-card-section">

  <div className="profile-card">

    <h2>Travel Information</h2>

    <div className="profile-details">

      <div className="detail-item">
        <span>Passport Status</span>
        <strong>Valid</strong>
      </div>

      <div className="detail-item">
        <span>Country</span>
        <strong>Nigeria</strong>
      </div>

      <div className="detail-item">
        <span>Preferred Destination</span>
        <strong>Canada</strong>
      </div>

      <div className="detail-item">
        <span>Travel Goal</span>
        <strong>Study Abroad</strong>
      </div>

    </div>

  </div>

</section>

</main>
</AppLayout>

);
};

export default Profile;
