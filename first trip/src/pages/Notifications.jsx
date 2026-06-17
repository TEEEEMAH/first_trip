import "../styles/Notifications.css";
import AppLayout from "../components/Layout/AppLayout";

const notifications = [
  {
    id: 1,
    type: "visa",
    icon: "🛂",
    title: "Visa Readiness Increased",
    message:
      "Your Canada visa readiness score increased from 84% to 89%.",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "flight",
    icon: "✈️",
    title: "Flight Price Alert",
    message:
      "Lagos → Toronto flights dropped by 12%. Consider booking soon.",
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "ai",
    icon: "🤖",
    title: "AI Recommendation",
    message:
      "Australia now matches your travel profile with an 86% success score.",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "document",
    icon: "📄",
    title: "Document Reminder",
    message:
      "Upload your bank statement to improve visa readiness analysis.",
    time: "2 days ago",
  },
  {
    id: 5,
    type: "trip",
    icon: "🌍",
    title: "Trip Milestone",
    message:
      "Your UK travel plan is now 75% complete.",
    time: "3 days ago",
  },
];

const Notifications = () => {
  return (
    <AppLayout> 
    <main className="notifications-page">

      {/* HEADER */}

      <section className="notifications-header">

        <span className="notifications-badge">
          TRAVEL INTELLIGENCE
        </span>

        <h1>
          Notifications Center
        </h1>

        <p>
          Stay informed about visa updates,
          travel opportunities, AI insights,
          flight alerts, and important reminders.
        </p>

      </section>

      {/* QUICK STATS */}

      <section className="notification-overview">

        <div className="overview-card">
          <h3>0</h3>
          <span>Unread Alerts</span>
        </div>

        <div className="overview-card">
          <h3>0</h3>
          <span>Visa Updates</span>
        </div>

        <div className="overview-card">
          <h3>0</h3>
          <span>AI Insights</span>
        </div>

        <div className="overview-card">
          <h3>0</h3>
          <span>Flight Alerts</span>
        </div>

      </section>

      {/* NOTIFICATION FEED */}

      <section className="notifications-feed">

        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="notification-card"
          >

            <div className="notification-icon">
              {notification.icon}
            </div>

            <div className="notification-content">

              <div className="notification-top">

                <h3>
                  {notification.title}
                </h3>

                <span>
                  {notification.time}
                </span>

              </div>

              <p>
                {notification.message}
              </p>

            </div>

          </div>
        ))}

      </section>

    </main>
    </AppLayout>
  );
};

export default Notifications;