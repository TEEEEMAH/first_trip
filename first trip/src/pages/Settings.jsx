import AppLayout from "../components/Layout/AppLayout";
import { useTheme } from "../context/ThemeContext";
import "../styles/Settings.css";

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <AppLayout>
      <main className="settings-page">

        {/* HERO */}
        <section className="settings-hero">
          <span className="settings-tag">
            ACCOUNT SETTINGS
          </span>

          <h1>Settings</h1>

          <p>
            Manage your account, security,
            travel preferences and AI experience.
          </p>
        </section>

        {/* ACCOUNT */}
        <section className="settings-card">

          <h2>Account Information</h2>

          <div className="settings-grid">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                defaultValue="Fateemah Odunola"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                defaultValue="fateemah@email.com"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="+234..."
              />
            </div>

            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                defaultValue="Nigeria"
              />
            </div>

          </div>

          <button className="save-btn">
            Save Changes
          </button>

        </section>

        {/* SECURITY */}
        <section className="settings-card">

          <h2>Security</h2>

          <div className="settings-grid">

            <div className="form-group">
              <label>Current Password</label>
              <input type="password" />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input type="password" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" />
            </div>

          </div>

          <div className="toggle-row">
            <span>Two-Factor Authentication</span>
            <input type="checkbox" />
          </div>

        </section>

        {/* NOTIFICATIONS */}
        <section className="settings-card">

          <h2>Notifications</h2>

          <div className="toggle-list">

            <div className="toggle-row">
              <span>Email Notifications</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="toggle-row">
              <span>Visa Updates</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="toggle-row">
              <span>AI Recommendations</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="toggle-row">
              <span>Trip Reminders</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="toggle-row">
              <span>Travel Alerts</span>
              <input type="checkbox" />
            </div>

          </div>

        </section>

        {/* TRAVEL PREFERENCES */}
        <section className="settings-card">

          <h2>Travel Preferences</h2>

          <div className="settings-grid">

            <div className="form-group">
              <label>Travel Goal</label>

              <select>
                <option>Study Abroad</option>
                <option>Work Abroad</option>
                <option>Tourism</option>
                <option>Immigration</option>
              </select>
            </div>

            <div className="form-group">
              <label>Preferred Country</label>

              <select>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>Australia</option>
              </select>
            </div>

            <div className="form-group">
              <label>Budget Range</label>

              <select>
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000+</option>
              </select>
            </div>

            <div className="form-group">
              <label>Travel Style</label>

              <select>
                <option>Budget Traveler</option>
                <option>Comfort Traveler</option>
                <option>Luxury Traveler</option>
              </select>
            </div>

          </div>

        </section>

        {/* APPEARANCE */}
        <section className="settings-card">

          <h2>Appearance</h2>

          <div className="settings-grid">

            <div className="form-group">
              <label>Theme</label>

              <select
                value={theme}
                onChange={(e) =>
                  setTheme(e.target.value)
                }
              >
                <option value="dark">
                  Dark
                </option>

                <option value="light">
                  Light
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Currency</label>

              <select>
                <option>USD</option>
                <option>GBP</option>
                <option>EUR</option>
                <option>NGN</option>
              </select>
            </div>

          </div>

        </section>

        {/* AI FEATURES */}
        <section className="settings-card">

          <h2>AI Features</h2>

          <div className="toggle-list">

            <div className="toggle-row">
              <span>AI Destination Matching</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="toggle-row">
              <span>AI Visa Analysis</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="toggle-row">
              <span>Travel Readiness Score</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="toggle-row">
              <span>Smart Recommendations</span>
              <input type="checkbox" defaultChecked />
            </div>

          </div>

        </section>

        {/* DANGER ZONE */}
        <section className="settings-card danger-zone">

          <h2>Danger Zone</h2>

          <div className="danger-actions">

            <button className="danger-btn">
              Delete Account
            </button>

            <button className="danger-btn secondary-danger">
              Sign Out Everywhere
            </button>

          </div>

        </section>

      </main>
    </AppLayout>
  );
};

export default Settings;