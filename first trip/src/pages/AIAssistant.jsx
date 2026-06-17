import { useState } from "react";
import "../styles/AIAssistant.css";
import AppLayout from "../components/Layout/AppLayout"; 

const AIAssistant = () => {
  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      type: "assistant",
      text: "Hello 👋 I'm your AI Travel Assistant. Ask me about destinations, visas, travel budgets, universities, or trip planning."
    }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage = {
      type: "user",
      text: message,
    };

    const aiResponse = {
      type: "assistant",
      text: "This is where your future AI response will appear. Later we'll connect this page to OpenAI or another AI service."
    };

    setChat((prev) => [
      ...prev,
      userMessage,
      aiResponse,
    ]);

    setMessage("");
  };

  return (
    <AppLayout>
    <main className="ai-page">

      {/* HERO */}

      <section className="ai-hero">

        <span className="ai-tag">
          AI TRAVEL INTELLIGENCE
        </span>

        <h1>Your Personal Travel AI</h1>

        <p>
          Get destination recommendations,
          visa guidance, travel planning,
          budgeting insights, and personalized
          travel intelligence.
        </p>

      </section>

      {/* QUICK ACTIONS */}

      <section className="quick-actions">

        <button>
          Best Countries For Study
        </button>

        <button>
          Visa Requirements
        </button>

        <button>
          Travel Budget Estimate
        </button>

        <button>
          Scholarship Opportunities
        </button>

      </section>

      {/* CHAT */}

      <section className="chat-container">

        <div className="chat-box">

          {chat.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.type}`}
            >
              {msg.text}
            </div>
          ))}

        </div>

        <div className="chat-input">

          <input
            type="text"
            placeholder="Ask your AI travel assistant..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              handleSend()
            }
          />

          <button onClick={handleSend}>
            Send
          </button>

        </div>

      </section>

      {/* AI CAPABILITIES */}

      <section className="capabilities">

        <h2>What AI Can Help You With</h2>

        <div className="capabilities-grid">

          <div className="capability-card">
            🌍 Destination Matching
          </div>

          <div className="capability-card">
            🛂 Visa Guidance
          </div>

          <div className="capability-card">
            🎓 Study Abroad Advice
          </div>

          <div className="capability-card">
            💰 Travel Budget Planning
          </div>

          <div className="capability-card">
            ✈️ Trip Planning
          </div>

          <div className="capability-card">
            📋 Document Readiness
          </div>

        </div>

      </section>

    </main>
    </AppLayout>
  );
};

export default AIAssistant;